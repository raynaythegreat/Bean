# 🫘 Bean

**Open-source social media post manager for creators**

Bean is a modern, self-hosted social media management tool designed for individual creators. Schedule posts, manage drafts, analyze performance, and use AI assistance—all from one beautiful dashboard.

![Bean Dashboard](https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Bean+Dashboard)

## ✨ Features

### Core Features
- 📅 **Post Scheduling** - Schedule posts to publish automatically at the perfect time
- 📝 **Draft Management** - Create, edit, and organize drafts before publishing
- 📆 **Calendar View** - Visual planning with a beautiful calendar interface
- 🖼️ **Media Management** - Upload, organize, and manage your media library
- 📊 **Analytics Dashboard** - Track engagement, reach, and performance metrics
- 🤖 **AI Assistance** - Generate captions, hashtags, and improve content with AI
- 📋 **Post Templates** - Save time with reusable post templates

### Platform Support

| Platform | Status | Notes |
|----------|--------|-------|
| Instagram | ✅ Auto-post | Via Meta Graph API |
| Facebook | ✅ Auto-post | Via Meta Graph API |
| TikTok | ✅ Auto-post | Via TikTok Creative Portal |
| Pinterest | ✅ Auto-post | Via Pinterest API v5 |
| Twitter/X | 📋 Manual | Free, no API costs |
| Threads | 📋 Manual | Limited API availability |
| RedNote/Xiaohongshu | 📋 Manual | No public API |

### AI Providers

| Provider | Type | Models |
|----------|------|--------|
| OpenAI | Cloud | GPT-4, GPT-3.5 Turbo |
| Ollama | Local | Llama 3, Mistral, Gemma, etc. |
| Zhipu GLM | Cloud | GLM-4, GLM-3-Turbo |
| Anthropic | Cloud | Claude 3 Opus, Sonnet, Haiku |

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Database | [PostgreSQL](https://www.postgresql.org/) + [Prisma](https://www.prisma.io/) |
| Authentication | [NextAuth.js v5](https://next-auth.js.org/) |
| Job Queue | [pg-boss](https://github.com/timgit/pg-boss) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| AI | OpenAI, Ollama, Zhipu GLM, Anthropic |

## 📋 Prerequisites

Before installing Bean, make sure you have:

- **Node.js** 18.17 or later ([Download](https://nodejs.org/))
- **PostgreSQL** 14 or later ([Download](https://www.postgresql.org/download/))
- **npm** 9.0 or later (comes with Node.js) or **pnpm** 8.0 or later

### Verifying Prerequisites
