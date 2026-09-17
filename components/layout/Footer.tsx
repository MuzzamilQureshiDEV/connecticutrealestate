import Link from 'next/link';
import { footerNav, site, socialLinks } from '@/lib/site';
import { telHref } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Icon, Logo } from '@/components/ui/Icons';

export function Footer() {
  const year = new Date().getFullYear();
  const visibleSocials = socialLinks.filter((social) => social.href !== '#');

  return (
    <footer className="border-t border-navy-100 bg-sand-50">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-12 lg:py-16">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-500">{site.description}</p>
            <p className="mt-4 font-display text-sm font-semibold text-navy-900">{site.promise}</p>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title} className="md:col-span-2">
              <h2 className="text-sm font-semibold text-navy-900">{group.title}</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-navy-500 transition-colors hover:text-bronze-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-2">
            <h2 className="text-sm font-semibold text-navy-900">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block text-xs text-navy-400">Steve&rsquo;s cell</span>
                <a href={telHref(site.broker.cell)} className="text-navy-700 transition-colors hover:text-bronze-600">
                  {site.broker.cell}
                </a>
              </li>
              <li>
                <span className="block text-xs text-navy-400">Office</span>
                <a href={telHref(site.office.phone)} className="text-navy-700 transition-colors hover:text-bronze-600">
                  {site.office.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-navy-500">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-bronze-600" strokeWidth={1.8} />
                <span>{site.office.full}</span>
              </li>
            </ul>

            {visibleSocials.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {visibleSocials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip transition-colors hover:border-bronze-300 hover:text-bronze-600"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-navy-100 py-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved. · Licence {site.license}
          </p>
          <p>{site.trademark}</p>
        </div>
      </Container>
    </footer>
  );
}
