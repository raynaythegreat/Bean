'use client';

import { useState } from 'react';
import { ExternalLink, Copy, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Platform, PLATFORM_CONFIGS } from '@/lib/social';

interface ManualPostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  platform: Platform;
  content: string;
  mediaUrls?: string[];
  onMarkAsPosted: () => void;
  onSkip: () => void;
}

export function ManualPostDialog({
  open,
  onOpenChange,
  platform,
  content,
  mediaUrls = [],
  onMarkAsPosted,
  onSkip,
}: ManualPostDialogProps) {
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<'copy' | 'open' | 'confirm'>('copy');

  const config = PLATFORM_CONFIGS[platform];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setStep('open');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleOpenPlatform = () => {
    if (config.setupUrl) {
      window.open(config.setupUrl, '_blank');
      setStep('confirm');
    }
  };

  const handleMarkPosted = () => {
    onMarkAsPosted();
    onOpenChange(false);
    setStep('copy');
  };

  const handleSkip = () => {
    onSkip();
    onOpenChange(false);
    setStep('copy');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: config.color }}
            >
              <span className="text-white text-xs font-bold">
                {config.name.charAt(0)}
              </span>
            </div>
            Post to {config.name}
            <Badge variant="secondary" className="ml-2">
              Manual
            </Badge>
          </DialogTitle>
          <DialogDescription>
            {config.name} doesn't support automated posting. Follow these steps to publish your content.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Content to copy */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Step 1: Copy your content</label>
            <div className="relative">
              <div className="bg-muted/50 rounded-lg p-4 text-sm max-h-40 overflow-y-auto whitespace-pre-wrap">
                {content}
              </div>
              <Button
                size="sm"
                variant="secondary"
                className="absolute top-2 right-2"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            {content.length > config.characterLimit && (
              <p className="text-xs text-destructive">
                Warning: Content exceeds {config.characterLimit} characters
              </p>
            )}
          </div>

          {/* Media preview */}
          {mediaUrls.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Attached Media</label>
              <div className="flex gap-2 flex-wrap">
                {mediaUrls.map((url, i) => (
                  <div
                    key={i}
                    className="w-20 h-20 rounded-lg bg-muted overflow-hidden"
                  >
                    <img
                      src={url}
                      alt={`Media ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                You'll need to manually upload these images/videos
              </p>
            </div>
          )}

          {/* Open platform button */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Step 2: Open {config.name}</label>
            <Button
              variant="outline"
              className="w-full justify-between"
              onClick={handleOpenPlatform}
            >
              <span>Open {config.name}</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className={cn(
              "w-3 h-3 rounded-full transition-colors",
              step === 'copy' ? "bg-primary" : "bg-primary/50"
            )} />
            <div className={cn(
              "w-3 h-3 rounded-full transition-colors",
              step === 'open' ? "bg-primary" : step === 'confirm' ? "bg-primary/50" : "bg-muted"
            )} />
            <div className={cn(
              "w-3 h-3 rounded-full transition-colors",
              step === 'confirm' ? "bg-primary" : "bg-muted"
            )} />
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="ghost" onClick={handleSkip}>
            Skip for now
          </Button>
          <Button onClick={handleMarkPosted}>
            <Check className="h-4 w-4 mr-2" />
            Mark as Posted
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}