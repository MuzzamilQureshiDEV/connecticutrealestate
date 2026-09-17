import { cn } from '@/lib/utils';

/** Base surface used by every card variant across the site. */
export function Card({
  className,
  interactive = false,
  children,
  as: Tag = 'div',
}: {
  className?: string;
  interactive?: boolean;
  children: React.ReactNode;
  as?: 'div' | 'article' | 'li';
}) {
  return (
    <Tag className={cn('card-surface', interactive && 'card-interactive', className)}>{children}</Tag>
  );
}
