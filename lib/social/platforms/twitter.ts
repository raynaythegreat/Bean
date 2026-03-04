/**
 * Twitter/X Provider - Manual Posting Only
 * 
 * Note: Twitter/X API v2 requires paid tier ($100+/mo) for posting.
 * This provider supports manual posting workflow only.
 */

import { BaseProvider, ProviderCapabilities, ProviderConfig } from '../base-provider';
import { PostContent, PostResult, AnalyticsData, AccountInfo } from '../types';

export class TwitterProvider extends BaseProvider {
  readonly platform = 'twitter' as const;
  readonly name = 'Twitter/X';
  readonly capabilities: ProviderCapabilities = {
    canPost: false,
    canSchedule: false,
    canDelete: false,
    canFetchAnalytics: false,
    supportsMedia: false,
    supportsVideo: false,
    supportsMultipleMedia: false,
    maxCharacters: 280,
    isManualOnly: true,
  };

  constructor(config: ProviderConfig) {
    super(config);
  }

  async connect(): Promise<{ url: string }> {
    // No OAuth needed for manual posting
    throw new Error('Twitter/X is manual posting only. Use connectManual() instead.');
  }

  async connectManual(username: string): Promise<AccountInfo> {
    return {
      platform: this.platform,
      accountId: `manual_${Date.now()}`,
      username: username,
      displayName: username,
      isConnected: true,
      isManualOnly: true,
    };
  }

  async handleCallback(code: string): Promise<AccountInfo> {
    throw new Error('Twitter/X is manual posting only. No OAuth callback supported.');
  }

  async post(content: PostContent): Promise<PostResult> {
    // This shouldn't be called, but just in case
    return {
      success: false,
      error: 'Twitter/X is manual posting only. Please post manually using the provided workflow.',
      isManualRequired: true,
    };
  }

  async delete(postId: string): Promise<boolean> {
    throw new Error('Cannot delete Twitter/X posts through API in manual mode.');
  }

  async getAnalytics(postId: string): Promise<AnalyticsData> {
    throw new Error('Analytics not available for Twitter/X in manual mode.');
  }

  async refreshTokens(): Promise<boolean> {
    // No tokens needed for manual posting
    return true;
  }

  async disconnect(): Promise<boolean> {
    return true;
  }

  getManualPostingInstructions(): string {
    return `1. Copy your post content below
2. Click "Open Twitter/X" to open the app
3. Paste and post your content
4. Return here and click "Mark as Posted"`;
  }

  getPlatformUrl(): string {
    return 'https://twitter.com/compose/tweet';
  }

  validateContent(content: PostContent): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (content.text && content.text.length > 280) {
      errors.push(`Content exceeds ${this.capabilities.maxCharacters} characters`);
    }
    
    return {
      valid: errors.length === 0,
      errors,
    };
  }
}