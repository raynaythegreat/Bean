export const PLATFORMS = {
  TWITTER: {
    name: 'Twitter/X',
    color: '#1DA1F2',
    icon: 'twitter',
    characterLimit: 280,
    mediaLimit: 4,
    videoLimitMB: 512,
    requiresPaidApi: true,
    apiCost: '$100/mo',
  },
  INSTAGRAM: {
    name: 'Instagram',
    color: '#E4405F',
    icon: 'instagram',
    characterLimit: 2200,
    mediaLimit: 10,
    videoLimitMB: 100,
    requiresPaidApi: false,
  },
  FACEBOOK: {
    name: 'Facebook',
    color: '#1877F2',
    icon: 'facebook',
    characterLimit: 63206,
    mediaLimit: 10,
    videoLimitMB: 1024,
    requiresPaidApi: false,
  },
  TIKTOK: {
    name: 'TikTok',
    color: '#000000',
    icon: 'video',
    characterLimit: 2200,
    mediaLimit: 1,
    videoLimitMB: 287,
    requiresPaidApi: false,
  },
  PINTEREST: {
    name: 'Pinterest',
    color: '#E60023',
    icon: 'image',
    characterLimit: 500,
    mediaLimit: 1,
    videoLimitMB: 100,
    requiresPaidApi: false,
  },
  THREADS: {
    name: 'Threads',
    color: '#000000',
    icon: 'message-circle',
    characterLimit: 500,
    mediaLimit: 10,
    videoLimitMB: 100,
    requiresPaidApi: false,
    manualOnly: true,
  },
} as const;

export type PlatformKey = keyof typeof PLATFORMS;

export const POST_STATUSES = {
  DRAFT: { label: 'Draft', color: 'gray' },
  SCHEDULED: { label: 'Scheduled', color: 'blue' },
  PUBLISHING: { label: 'Publishing', color: 'yellow' },
  PUBLISHED: { label: 'Published', color: 'green' },
  FAILED: { label: 'Failed', color: 'red' },
} as const;

export const AI_PROVIDERS = {
  openai: {
    name: 'OpenAI',
    models: ['gpt-4o', 'gpt-4o-mini', 'gpt-4-turbo', 'gpt-3.5-turbo'],
    requiresApiKey: true,
  },
  ollama: {
    name: 'Ollama (Local)',
    models: ['llama3', 'llama3:70b', 'mistral', 'gemma', 'codellama'],
    requiresApiKey: false,
  },
  zhipu: {
    name: 'Zhipu GLM',
    models: ['glm-4', 'glm-4-flash', 'glm-3-turbo'],
    requiresApiKey: true,
  },
  anthropic: {
    name: 'Anthropic',
    models: ['claude-3-opus-20240229', 'claude-3-sonnet-20240229', 'claude-3-haiku-20240307'],
    requiresApiKey: true,
  },
} as const;

export const TIMEZONES = [
  'UTC',
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'America/Toronto',
  'America/Vancouver',
  'Europe/London',
  'Europe/Paris',
  'Europe/Berlin',
  'Europe/Moscow',
  'Asia/Tokyo',
  'Asia/Shanghai',
  'Asia/Hong_Kong',
  'Asia/Singapore',
  'Asia/Dubai',
  'Australia/Sydney',
  'Pacific/Auckland',
];

export const CATEGORIES = [
  'Promotional',
  'Educational',
  'Entertainment',
  'Personal',
  'Behind the Scenes',
  'Product',
  'Announcement',
  'Tips & Tricks',
  'Question',
  'Meme',
  'Other',
];