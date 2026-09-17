import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Reveal } from './Reveal';

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  action?: React.ReactNode;
  tone?: 'white' | 'sand' | 'navy' | 'wash';
  className?: string;
  children?: React.ReactNode;
};

const tones = {
  white: 'bg-white',
  sand: 'bg-sand-50',
  navy: 'bg-navy-mesh text-navy-100',
  wash: 'bg-hero-wash',
};

/** Consistent vertical rhythm plus an optional heading block. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
  action,
  tone = 'white',
  className,
  children,
}: SectionProps) {
  const isNavy = tone === 'navy';
  const centered = align === 'center';

  return (
    <section
      id={id}
      aria-labelledby={id && title ? `${id}-heading` : undefined}
      className={cn('py-16 sm:py-20 lg:py-24', tones[tone], className)}
    >
      <Container>
        {(eyebrow || title || intro) && (
          <div
            className={cn(
              'mb-10 flex flex-col gap-5 sm:mb-14',
              centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between',
            )}
          >
            <div className={cn('max-w-2xl', centered && 'mx-auto')}>
              {eyebrow && (
                <Reveal>
                  <p className={cn('eyebrow mb-3', isNavy && 'text-bronze-300')}>{eyebrow}</p>
                </Reveal>
              )}
              {title && (
                <Reveal delay={0.05}>
                  <h2 id={id ? `${id}-heading` : undefined} className={cn('h2', isNavy && 'text-white')}>
                    {title}
                  </h2>
                </Reveal>
              )}
              {intro && (
                <Reveal delay={0.1}>
                  <p className={cn('lead mt-4', isNavy && 'text-navy-100/80')}>{intro}</p>
                </Reveal>
              )}
            </div>
            {action && (
              <Reveal delay={0.15} className="shrink-0">
                {action}
              </Reveal>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
