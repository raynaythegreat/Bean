import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export const postSchema = z.object({
  content: z.string().max(63206).optional(),
  platformContent: z.record(z.string()).optional(),
  status: z.enum(['DRAFT', 'SCHEDULED', 'PUBLISHED', 'FAILED']).optional(),
  scheduledAt: z.string().or(z.date()).optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  platformIds: z.array(z.string()).min(1, 'Select at least one platform'),
  mediaIds: z.array(z.string()).optional(),
});

export const templateSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  description: z.string().max(500).optional(),
  content: z.string().min(1, 'Content is required'),
  category: z.string().optional(),
  variables: z.array(z.object({
    name: z.string(),
    description: z.string().optional(),
    default: z.string().optional(),
  })).optional(),
});

export const settingsSchema = z.object({
  name: z.string().min(2).optional(),
  timezone: z.string(),
  theme: z.enum(['light', 'dark', 'system']),
  defaultAiProvider: z.enum(['openai', 'ollama', 'zhipu', 'anthropic']).optional(),
  openaiApiKey: z.string().optional(),
  openaiModel: z.string().optional(),
  ollamaEnabled: z.boolean().optional(),
  ollamaBaseUrl: z.string().url().optional(),
  ollamaModel: z.string().optional(),
  zhipuApiKey: z.string().optional(),
  zhipuModel: z.string().optional(),
  anthropicApiKey: z.string().optional(),
  anthropicModel: z.string().optional(),
  notifyScheduledPost: z.boolean(),
  notifyFailedPost: z.boolean(),
  notifyAnalytics: z.boolean(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
export type PostInput = z.infer<typeof postSchema>;
export type TemplateInput = z.infer<typeof templateSchema>;
export type SettingsInput = z.infer<typeof settingsSchema>;