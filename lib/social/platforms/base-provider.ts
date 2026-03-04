/**
 * Base Social Media Provider
 * 
 * Abstract class that all social platform providers must extend.
 * Supports both automated (OAuth) and manual posting modes.
 */

import { PostContent, PostResult, AnalyticsData, AccountInfo, Platform } from './types';

export interface ProviderCapabilities {
  canPost: boolean;
  canSchedule: boolean;
  canDelete: boolean;
  canFetchAnalytics: boolean;
  supportsMedia: boolean;
  supportsVideo: boolean;
  supportsMultipleMedia: boolean;
  maxCharacters: number;
  isManualOnly: boolean;
}

export interface ProviderConfig {
  clientId?: string;
  clientSecret?: string;
  redirectUri?: string;
  accessToken?: string;
  refreshToken?: string;
  tokenExpiresAt?: Date;
}

export abstract class BaseProvider {
  abstract readonly platform: Platform;
  abstract readonly name: string;
  abstract readonly capabilities: ProviderCapabilities;
  
  protected config: ProviderConfig;

  constructor(config: ProviderConfig = {}) {
    this.config = config;
  }

  // OAuth flow methods
  abstract connect(): Promise<{ url: string }>;
  abstract handleCallback(code: string): Promise<AccountInfo>;
  
  // Manual connection for manual-only platforms
  async connectManual(username: string): Promise<AccountInfo> {
    throw new Error('Manual connection not supported for this platform');
  }

  // Posting methods
  abstract post(content: PostContent): Promise<PostResult>;
  abstract delete(postId: string): Promise<boolean>;

  // Analytics
  abstract getAnalytics(postId: string): Promise<AnalyticsData>;

  // Token management
  abstract refreshTokens(): Promise<boolean>;
  abstract disconnect(): Promise<boolean>;

  // Manual posting helpers
  getManualPostingInstructions(): string | null {
    return null;
  }

  getPlatformUrl(): string | null {
    return null;
  }

  // Content validation
  abstract validateContent(content: PostContent): { valid: boolean; errors: string[] };

  // Update config
  updateConfig(config: Partial<ProviderConfig>): void {
    this.config = { ...this.config, ...config };
  }
}