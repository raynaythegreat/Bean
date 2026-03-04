/**
 * Threads Provider - Manual Posting Only
 * 
 * Note: Threads API has limited availability and doesn't support
 * automated posting yet. This provider supports manual posting workflow.
 */

import { BaseProvider, ProviderCapabilities, ProviderConfig } from '../base-provider';
import { PostContent, PostResult, AnalyticsData, AccountInfo } from '../types';

export class ThreadsProvider extends BaseProvider {
  readonly platform = 'threads' as const;
  readonly name = 'Threads';
  readonly capabilities: ProviderCapabilities = {
    canPost: false,
    canSchedule: false,
    canDelete: false,
    canFetchAnalytics: false,
    supportsMedia: true,
    supportsVideo: true,
    supportsMultipleMedia: true,
    maxCharacters: 500,
    isManualOnly: true,
  };

  constructor(config: ProviderConfig) {
    super(config);
  }

  async connect(): Promise<{ url: string }> {
    throw new Error('Threads is manual posting only. Use connectManual() instead.');
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
    throw new Error('Threads is manual posting only. No OAuth callback supported.');
  }

  async post(content: PostContent): Promise<PostResult> {
    return {
      success: false,
      error: 'Threads is manual posting only. Please post manually using the provided workflow.',
      isManualRequired: true,
    };
  }

  async delete(postId: string): Promise<boolean> {
    throw new Error('Cannot delete Threads posts through API in manual mode.');
  }

  async getAnalytics(postId: string): Promise<AnalyticsData> {
    throw new Error('Analytics not available for Threads in manual mode.');
  }

  async refreshTokens(): Promise<boolean> {
    return true;
  }

  async disconnect(): Promise<boolean> {
    return true;
  }

  getManualPostingInstructions(): string {
    return `1. Copy your post content below
2. Click "Open Threads" to open the app
3. Paste and post your content
4. Return here and click "Mark as Posted"`;
  }

  getPlatformUrl(): string {
    return 'https://www.threads.net';
  }

  validateContent(content: PostContent): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (content.text && content.text.length > 500) {
      errors.push(`Content exceeds ${this.capabilities.maxCharacters} characters`);
    }
    
    return {
      valid: errors.length === 0,
      errors,
    };
  }
}