'use client';

import Link from 'next/link';
import { PenSquare, Calendar, Upload, FileCode, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const actions = [
  {
    name: 'Create Post',
    href: '/compose',
    icon: PenSquare,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    name: 'Schedule',
    href: '/calendar',
    icon: Calendar,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    name: 'Upload Media',
    href: '/media',
    icon: Upload,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    name: 'AI Assist',
    href: '/ai',
    icon: Sparkles,
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-100 dark:bg-amber-900/30',
  },
];

export function QuickActions() {
  return (
    <div className="card-modern">
      <h3 className="font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-2">
        {actions.map((action) => (
          <Link
            key={action.name}
            href={action.href}
            className={cn(
              'flex flex-col items-center gap-2 p-4 rounded-lg',
              'hover:bg-accent transition-colors duration-200',
              'border border-transparent hover:border-border'
            )}
          >
            <div className={cn('p-2 rounded-lg', action.bgColor)}>
              <action.icon className={cn('h-5 w-5', action.color)} />
            </div>
            <span className="text-xs font-medium text-center">{action.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}