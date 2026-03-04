/**
 * Application Constants
 */

// Platform character limits
export const CHARACTER_LIMITS = {
  twitter: 280,
  instagram: 2200,
  facebook: 63206,
  tiktok: 2200,
  threads: 500,
  pinterest: 500,
} as const;

// Supported media types per platform
export const SUPPORTED_MEDIA = {
  twitter: {
    images: { max: 4, formats: ['jpg', 'png', 'gif', 'webp'], maxSize: 5 * 1024 * 1024 },
    videos: { max: 1, formats: ['mp4', 'mov'], maxSize: 512 * 1024 * 1024 },
  },
  instagram: {
    images: { max: 10, formats: ['jpg', 'png'], maxSize: 30 * 1024 * 1024 },
    videos: { max: 1, formats: ['mp4', 'mov'], maxSize: 4 * 1024 * 1024 * 1024 },
  },
  facebook: {
    images: { max: 10, formats: ['jpg', 'png', 'gif'], maxSize: 4 * 1024 * 1024 },
    videos: { max: 1, formats: ['mp4', 'mov'], maxSize: 10 * 1024 * 1024 * 1024 },
  },
  tiktok: {
    images: { max: 0, formats: [], maxSize: 0 },
    videos: { max: 1, formats: ['mp4', 'mov'], maxSize: 287 * 1024 * 1024 },
  },
  threads: {
    images: { max: 10, formats: ['jpg', 'png'], maxSize: 30 * 1024 * 1024 },
    videos: { max: 1, formats: ['mp4', 'mov'], maxSize: 1 * 1024 * 1024 * 1024 },
  },
  pinterest: {
    images: { max: 1, formats: ['jpg', 'png'], maxSize: 32 * 1024 * 1024 },
    videos: { max: 1, formats: ['mp4', 'mov'], maxSize: 2 * 1024 * 1024 * 1024 },
  },
} as const;

// Manual-only platforms
export const MANUAL_ONLY_PLATFORMS = ['twitter', 'threads'] as const;

// AI Providers
export const AI_PROVIDERS = {
  openai: {
    name: 'OpenAI',
    models: ['gpt-4', 'gpt-4-turbo', 'gpt-3.5-turbo'],
    defaultModel: 'gpt-4',
  },
  ollama: {
    name: 'Ollama (Local)',
    models: ['llama3', 'mistral', 'gemma', 'codellama'],
    defaultModel: 'llama3',
  },
  zhipu: {
    name: 'Zhipu GLM',
    models: ['glm-4', 'glm-4-flash', 'glm-3-turbo'],
    defaultModel: 'glm-4',
  },
  anthropic: {
    name: 'Anthropic',
    models: ['claude-3-opus-20240229', 'claude-3-sonnet-20240229', 'claude-3-haiku-20240307'],
    defaultModel: 'claude-3-sonnet-20240229',
  },
} as const;

// Post status workflow
export const POST_STATUS = {
  DRAFT: 'draft',
  SCHEDULED: 'scheduled',
  QUEUED: 'queued',
  PUBLISHING: 'publishing',
  PUBLISHED: 'published',
  FAILED: 'failed',
  MANUAL_PENDING: 'manual_pending',
  MANUAL_COMPLETED: 'manual_completed',
} as const;

// Default values
export const DEFAULTS = {
  timezone: 'America/New_York',
  theme: 'system',
  aiProvider: 'ollama',
  postsPerPage: 20,
  mediaPerPage: 50,
} as const;