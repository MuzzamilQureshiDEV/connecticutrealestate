'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { mainNav, site } from '@/lib/site';
import { cn, telHref } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Icon, Logo } from '@/components/ui/Icons';
import { ease } from '@/components/ui/Reveal';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    // The panel below is a SIBLING of <header>, not a child: the header's
    // backdrop-blur creates a containing block for fixed-position descendants,
    // which would otherwise clip the menu inside the 76px bar.
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth',
          scrolled
            ? 'border-b border-navy-100/80 bg-white/85 shadow-glass backdrop-blur-xl'
            : 'border-b border-transparent bg-white/40 backdrop-blur-sm',
        )}
      >
        <div className="container-x flex h-[76px] items-center justify-between gap-4">
          <Link href="/" aria-label={`${site.name} — home`}>
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {mainNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-bronze-500 after:transition-transform after:duration-300',
                        active
                          ? 'text-navy-900 after:scale-x-100'
                          : 'text-navy-500 after:scale-x-0 hover:text-navy-900 hover:after:scale-x-100',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href={telHref(site.broker.cell)}
              size="sm"
              icon="phone"
              iconPosition="left"
              className="hidden sm:inline-flex"
            >
              Call / Text Steve
            </Button>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-11 w-11 place-items-center rounded-xl border border-navy-100 bg-white text-navy-900 transition-colors hover:border-navy-900 xl:hidden"
            >
              <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-navy-900/25 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile"
              className="fixed inset-x-3 top-[86px] z-40 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-navy-100 bg-white p-4 shadow-lift xl:hidden"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease }}
            >
              <ul className="flex flex-col">
                {mainNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, ease, delay: 0.04 + i * 0.03 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center justify-between border-b border-navy-100 py-3.5 text-base font-medium last:border-b-0',
                        pathname === item.href ? 'text-bronze-600' : 'text-navy-800 hover:text-bronze-600',
                      )}
                    >
                      {item.label}
                      <Icon name="chevronRight" className="h-4 w-4 text-navy-300" strokeWidth={1.8} />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-4 grid gap-2">
                <Button href="/contact" className="w-full" icon="arrowRight">
                  Start Your Journey
                </Button>
                <Button href={telHref(site.broker.cell)} variant="outline" className="w-full" icon="phone" iconPosition="left">
                  {site.broker.cell}
                </Button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
