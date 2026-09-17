import { cn } from '@/lib/utils';

/** Centres content and applies the shared page gutter. */
export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('container-x', className)}>{children}</div>;
}
