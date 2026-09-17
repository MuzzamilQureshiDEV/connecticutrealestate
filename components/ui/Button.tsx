import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Icon } from './Icons';
import type { IconName } from '@/lib/types';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  // navy-900 on white: 15:1. bronze-600 with white text: 4.6:1. Both clear AA.
  primary:
    'bg-navy-900 text-white shadow-[0_12px_28px_-16px_rgba(10,22,38,0.9)] hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift',
  accent:
    'bg-bronze-600 text-white shadow-[0_12px_28px_-16px_rgba(138,98,32,0.9)] hover:-translate-y-0.5 hover:bg-bronze-700',
  outline: 'border border-navy-200 bg-white text-navy-900 hover:-translate-y-0.5 hover:border-navy-900',
  ghost: 'text-navy-900 hover:text-bronze-600',
  light: 'bg-white text-navy-900 hover:-translate-y-0.5 hover:bg-navy-50',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps &
  (
    | ({ href: string; external?: boolean } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>)
    | ({ href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>)
  );

/**
 * Shared button. Renders a next/link for internal hrefs, an <a> for external
 * ones, and a <button> when no href is given.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-smooth active:translate-y-0 disabled:pointer-events-none disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <Icon name={icon} className="h-4 w-4" strokeWidth={1.9} />}
      {children}
      {icon && iconPosition === 'right' && (
        <Icon
          name={icon}
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={1.9}
        />
      )}
    </>
  );

  if ('href' in rest && rest.href) {
    const { href, external, ...anchorProps } = rest as { href: string; external?: boolean };
    const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
