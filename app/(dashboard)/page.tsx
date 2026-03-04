'use client';

import { Header } from '@/components/layout/header';
import { StatsCard } from '@/components/dashboard/stats-card';
import { RecentPosts } from '@/components/dashboard/recent-posts';
import { ScheduledPosts } from '@/components/dashboard/scheduled-posts';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { ConnectedAccounts } from '@/components/dashboard/connected-accounts';
import {
  Calendar,
  FileText,
  Image,
  TrendingUp,
  Clock,
  Users,
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <>
      <Header title="Dashboard" />
      <div className="p-6 space-y-6">
        {/* Welcome section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Welcome back! 👋
            </h2>
            <p className="text-muted-foreground">
              Here's what's happening with your content today.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Posts"
            value="248"
            change="+12%"
            changeType="positive"
            icon={FileText}
            description="This month"
          />
          <StatsCard
            title="Scheduled"
            value="12"
            icon={Calendar}
            description="Pending posts"
          />
          <StatsCard
            title="Media Files"
            value="1,024"
            icon={Image}
            description="In library"
          />
          <StatsCard
            title="Engagement"
            value="8.2K"
            change="+23%"
            changeType="positive"
            icon={TrendingUp}
            description="Total interactions"
          />
        </div>

        {/* Main content grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Quick actions + accounts */}
          <div className="space-y-6">
            <QuickActions />
            <ConnectedAccounts />
          </div>

          {/* Scheduled posts */}
          <div className="lg:col-span-2">
            <ScheduledPosts />
          </div>
        </div>

        {/* Recent posts */}
        <RecentPosts />
      </div>
    </>
  );
}