'use client';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Account {
  id: string;
  platform: string;
  username: string;
  avatar?: string;
  connected: boolean;
}

const mockAccounts: Account[] = [
  { id: '1', platform: 'twitter', username: '@beanapp', connected: true },
  { id: '2', platform: 'instagram', username: '@bean.app', connected: true },
  { id: '3', platform: 'tiktok', username: '@beanapp', connected: false },
  { id: '4', platform: 'facebook', username: 'Bean App', connected: false },
  { id: '5', platform: 'pinterest', username: 'beanapp', connected: false },
  { id: '6', platform: 'threads', username: '@bean.app', connected: false },
];

const platformColors: Record<string, string> = {
  twitter: 'bg-[#1DA1F2]',
  instagram: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600',
  facebook: 'bg-[#1877F2]',
  tiktok: 'bg-black dark:bg-white dark:text-black',
  pinterest: 'bg-[#E60023]',
  threads: 'bg-black dark:bg-white dark:text-black',
};

const platformLabels: Record<string, string> = {
  twitter: 'Twitter/X',
  instagram: 'Instagram',
  facebook: 'Facebook',
  tiktok: 'TikTok',
  pinterest: 'Pinterest',
  threads: 'Threads',
};

export function ConnectedAccounts() {
  return (
    <div className="card-modern">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Connected Accounts</h3>
        <Link href="/settings/accounts">
          <Button variant="ghost" size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </Link>
      </div>
      <div className="space-y-2">
        {mockAccounts.map((account) => (
          <div
            key={account.id}
            className={cn(
              'flex items-center gap-3 p-2 rounded-lg',
              'hover:bg-accent transition-colors'
            )}
          >
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold',
                platformColors[account.platform]
              )}
            >
              {account.platform.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{platformLabels[account.platform]}</p>
              <p className="text-xs text-muted-foreground truncate">{account.username}</p>
            </div>
            <div
              className={cn(
                'h-2 w-2 rounded-full',
                account.connected ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}