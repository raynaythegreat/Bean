/**
 * Social Media Integration - Main Entry
 */

export * from './types';
export * from './platforms';

import { BaseProvider, ProviderConfig } from './platforms/base-provider';
import { TwitterProvider } from './platforms/twitter';
import { ThreadsProvider } from './platforms/threads';
import { Platform } from './types';

const providers: Record<Platform, new (config: ProviderConfig) => BaseProvider> = {
  twitter: TwitterProvider,
  threads: ThreadsProvider,
  // Add other providers as they're implemented
  instagram: class MockProvider extends BaseProvider {
    platform = 'instagram' as const;
    name = 'Instagram';
    capabilities = {} as any;
    connect = async () => ({ url: '' });
    handleCallback = async () => ({}) as any;
    post = async () => ({ success: false });
    delete = async () => false;
    getAnalytics = async () => ({}) as any;
    refreshTokens = async () => false;
    disconnect = async () => false;
    validateContent = () => ({ valid: true, errors: [] });
  },
  facebook: class MockProvider extends BaseProvider {
    platform = 'facebook' as const;
    name = 'Facebook';
    capabilities = {} as any;
    connect = async () => ({ url: '' });
    handleCallback = async () => ({}) as any;
    post = async () => ({ success: false });
    delete = async () => false;
    getAnalytics = async () => ({}) as any;
    refreshTokens = async () => false;
    disconnect = async () => false;
    validateContent = () => ({ valid: true, errors: [] });
  },
  tiktok: class MockProvider extends BaseProvider {
    platform = 'tiktok' as const;
    name = 'TikTok';
    capabilities = {} as any;
    connect = async () => ({ url: '' });
    handleCallback = async () => ({}) as any;
    post = async () => ({ success: false });
    delete = async () => false;
    getAnalytics = async () => ({}) as any;
    refreshTokens = async () => false;
    disconnect = async () => false;
    validateContent = () => ({ valid: true, errors: [] });
  },
  pinterest: class MockProvider extends BaseProvider {
    platform = 'pinterest' as const;
    name = 'Pinterest';
    capabilities = {} as any;
    connect = async () => ({ url: '' });
    handleCallback = async () => ({}) as any;
    post = async () => ({ success: false });
    delete = async () => false;
    getAnalytics = async () => ({}) as any;
    refreshTokens = async () => false;
    disconnect = async () => false;
    validateContent = () => ({ valid: true, errors: [] });
  },
};

export function getProvider(platform: Platform, config: ProviderConfig = {}): BaseProvider {
  const ProviderClass = providers[platform];
  if (!ProviderClass) {
    throw new Error(`Unknown platform: ${platform}`);
  }
  return new ProviderClass(config);
}

export { BaseProvider };