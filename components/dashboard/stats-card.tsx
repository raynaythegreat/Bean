import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown, LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  description?: string;
}

export function StatsCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  description,
}: StatsCardProps) {
  return (
    <div className="stats-card">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="mt-3">
        <p className="text-2xl font-bold">{value}</p>
      </div>
      {(change || description) && (
        <div className="mt-2 flex items-center gap-2">
          {change && (
            <span
              className={cn(
                'inline-flex items-center gap-0.5 text-xs font-medium',
                changeType === 'positive' && 'text-green-600 dark:text-green-400',
                changeType === 'negative' && 'text-red-600 dark:text-red-400',
                changeType === 'neutral' && 'text-muted-foreground'
              )}
            >
              {changeType === 'positive' && <ArrowUp className="h-3 w-3" />}
              {changeType === 'negative' && <ArrowDown className="h-3 w-3" />}
              {change}
            </span>
          )}
          {description && (
            <span className="text-xs text-muted-foreground">{description}</span>
          )}
        </div>
      )}
    </div>
  );
}