/**
 * Social Media Types
 */

export type Platform = 
  | 'twitter'
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'threads'
  | 'pinterest';

export interface PostContent {
  text: string;
  media?: MediaAttachment[];
  link?: string;
  location?: string;
  tags?: string[];
}

export interface MediaAttachment {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnailUrl?: string;
  altText?: string;
  width?: number;
  height?: number;
  duration?: number; // For videos, in seconds
}

export interface PostResult {
  success: boolean;
  postId?: string;
  postUrl?: string;
  error?: string;
  isManualRequired?: boolean;
}

export interface AnalyticsData {
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  views: number;
  impressions: number;
  reach: number;
  engagement: number;
  recordedAt: Date;
}

export interface AccountInfo {
  platform: Platform;
  accountId: string;
  username: string;
  displayName?: string;
  avatarUrl?: string;
  isConnected: boolean;
  isManualOnly?: boolean;
  followerCount?: number;
}

export interface PlatformConfig {
  platform: Platform;
  name: string;
  icon: string;
  color: string;
  characterLimit: number;
  supportsMedia: boolean;
  supportsVideo: boolean;
  isManualOnly: boolean;
  setupUrl?: string;
}

export const PLATFORM_CONFIGS: Record<Platform, PlatformConfig> = {
  twitter: {
    platform: 'twitter',
    name: 'Twitter/X',
    icon: 'twitter',
    color: '#1DA1F2',
    characterLimit: 280,
    supportsMedia: true,
    supportsVideo: true,
    isManualOnly: true,
    setupUrl: 'https://twitter.com/compose/tweet',
  },
  instagram: {
    platform: 'instagram',
    name: 'Instagram',
    icon: 'instagram',
    color: '#E4405F',
    characterLimit: 2200,
    supportsMedia: true,
    supportsVideo: true,
    isManualOnly: false,
    setupUrl: 'https://developers.facebook.com/docs/instagram',
  },
  facebook: {
    platform: 'facebook',
    name: 'Facebook',
    icon: 'facebook',
    color: '#1877F2',
    characterLimit: 63206,
    supportsMedia: true,
    supportsVideo: true,
    isManualOnly: false,
    setupUrl: 'https://developers.facebook.com',
  },
  tiktok: {
    platform: 'tiktok',
    name: 'TikTok',
    icon: 'tiktok',
    color: '#000000',
    characterLimit: 2200,
    supportsMedia: true,
    supportsVideo: true,
    isManualOnly: false,
    setupUrl: 'https://developers.tiktok.com',
  },
  threads: {
    platform: 'threads',
    name: 'Threads',
    icon: 'threads',
    color: '#000000',
    characterLimit: 500,
    supportsMedia: true,
    supportsVideo: true,
    isManualOnly: true,
    setupUrl: 'https://www.threads.net',
  },
  pinterest: {
    platform: 'pinterest',
    name: 'Pinterest',
    icon: 'pinterest',
    color: '#E60023',
    characterLimit: 500,
    supportsMedia: true,
    supportsVideo: true,
    isManualOnly: false,
    setupUrl: 'https://developers.pinterest.com',
  },
};