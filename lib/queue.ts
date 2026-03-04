import PgBoss from 'pg-boss';
import prisma from './db';

let boss: PgBoss | null = null;

export async function getQueue() {
  if (!boss) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL is not set');
    }
    boss = new PgBoss({
      connectionString,
      schema: 'bean_queue',
    });
    await boss.start();
  }
  return boss;
}

export const QUEUE_NAMES = {
  PUBLISH_POST: 'publish-post',
  SYNC_ANALYTICS: 'sync-analytics',
  REFRESH_TOKENS: 'refresh-tokens',
} as const;

export interface PublishPostJob {
  postId: string;
  accountId: string;
}

export interface SyncAnalyticsJob {
  accountId: string;
}

export async function schedulePost(postId: string, scheduledAt: Date) {
  const queue = await getQueue();
  const post = await prisma.post.findUnique({
    include: { accounts: { include: { account: true } } },
    where: { id: postId },
  });

  if (!post) {
    throw new Error('Post not found');
  }

  // Schedule a job for each account
  for (const postAccount of post.accounts) {
    if (postAccount.account.platform === 'THREADS') {
      // Threads is manual only - skip scheduling
      continue;
    }

    await queue.publishAfter(
      QUEUE_NAMES.PUBLISH_POST,
      { postId, accountId: postAccount.accountId } as PublishPostJob,
      { startAfter: scheduledAt }
    );
  }
}

export async function cancelScheduledPost(postId: string) {
  const queue = await getQueue();
  // Cancel all jobs for this post
  await queue.cancel(`postId:${postId}`);
}

export async function scheduleAnalyticsSync(accountId: string) {
  const queue = await getQueue();
  await queue.publish(QUEUE_NAMES.SYNC_ANALYTICS, { accountId } as SyncAnalyticsJob);
}