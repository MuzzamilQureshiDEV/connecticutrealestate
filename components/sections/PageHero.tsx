import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

/** Title band used at the top of every inner page. */
export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  tone = 'wash',
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  actions?: React.ReactNode;
  tone?: 'wash' | 'navy';
  children?: React.ReactNode;
}) {
  const isNavy = tone === 'navy';

  return (
    <section
      className={cn(
        'border-b',
        isNavy ? 'bg-navy-mesh border-navy-800' : 'bg-hero-wash border-navy-100',
      )}
    >
      <Container>
        <div className="py-14 sm:py-20 lg:py-24">
          <Reveal>
            {eyebrow && <p className={cn('eyebrow mb-4', isNavy && 'text-bronze-300')}>{eyebrow}</p>}
            <h1 className={cn('h1 max-w-4xl', isNavy && 'text-white')}>{title}</h1>
            {lead && (
              <p className={cn('lead mt-5 max-w-2xl', isNavy && 'text-navy-100/80')}>{lead}</p>
            )}
          </Reveal>

          {actions && (
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
            </Reveal>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
}
