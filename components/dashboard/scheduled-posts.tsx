'use client';

import { format } from 'date-fns';
import { MoreVertical, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ScheduledPost {
  id: string;
  content: string;
  platforms: string[];
 