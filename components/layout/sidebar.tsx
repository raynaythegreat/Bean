'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Home,
  PenSquare,
  Calendar,
  FileText,
  Image,
  BarChart3,
  FileCode,
  Settings,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Compose', href: '/compose', icon: PenSquare },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Posts', href: '/posts', icon: FileText },
  { name: 'Media', href: '/media', icon: Image },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Templates', href: '/templates', icon: FileCode },
];

const secondaryNav = [
  { name: 'AI Assistant', href: '/ai', icon: Sparkles },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen border-r border-border bg-card transition-all duration-300',
        collapsed ? 'w-[70px]' : 'w-[260px]'
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            B
          </div>
          {!collapsed && (
            <span className="text-lg font-semibold">Bean</span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        <nav className="flex-1 space-y-1 p-3 overflow-y-auto scrollbar-thin">
          {navigation.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/' && pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'nav-item',
                  isActive && 'active',
                  collapsed && 'justify-center px-0'
                )}
                title={collapsed ? item.name : undefined}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}

          <div className="my-4 border-t border-border" />

          {secondaryNav.map((item) => {
            const isActive = pathname.startsWith(item.href);
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'nav-item',
                  isActive && 'active',
                  collapsed && 'justify-center px-0'
                )}
                title={collapsed ? item.name : undefined}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Collapse button */}
        <div className="border-t border-border p-3">
          <Button
            variant="ghost"
            size="sm"
            className={cn('w-full', collapsed && 'px-0')}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4 mr-2" />
                <span>Collapse</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </aside>
  );
}