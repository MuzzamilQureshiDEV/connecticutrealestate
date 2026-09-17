'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AnimatePresence, motion } from 'framer-motion';
import { serviceInterests } from '@/lib/content/pages';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ease } from '@/components/ui/Reveal';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z
    .string()
    .optional()
    .refine((value) => !value || value.replace(/\D/g, '').length >= 10, 'Please enter a valid phone number.'),
  interest: z.string().min(1, 'Please choose an option.'),
  message: z.string().min(10, 'A sentence or two about your plans helps us route you correctly.'),
});

type FormValues = z.infer<typeof schema>;

/**
 * Lead capture form (React Hook Form + Zod).
 *
 * CLIENT/DEV: the submit handler is a stub — it opens the visitor's mail client
 * with the enquiry pre-filled so no lead is ever lost. To capture leads in a
 * CRM, replace the marked block with a POST to your endpoint and set the
 * status from the response.
 */
export function ContactForm({
  title,
  note,
  defaultInterest,
  className,
}: {
  title?: string;
  note?: string;
  defaultInterest?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { interest: defaultInterest ?? '', name: '', email: '', phone: '', message: '' },
  });

  const onSubmit = (values: FormValues) => {
    try {
      // ── Submission stub ────────────────────────────────────────────────
      const subject = encodeURIComponent(`Website enquiry — ${values.interest} — ${values.name}`);
      const body = encodeURIComponent(
        `${values.message}\n\n— ${values.name}\n${values.email}\n${values.phone ?? ''}\nInterest: ${values.interest}`,
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus('success');
      reset({ interest: defaultInterest ?? '', name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={cn('card-surface p-6 sm:p-8', className)}>
      {title && <h2 className="font-display text-xl font-bold text-navy-900">{title}</h2>}
      {note && <p className="mt-2 text-sm text-navy-500">{note}</p>}

      <div className={cn('grid gap-5 sm:grid-cols-2', (title || note) && 'mt-6')}>
        <Field label="Name" error={errors.name?.message} htmlFor="name">
          <input id="name" autoComplete="name" className={cn('field', errors.name && 'field-error')} {...register('name')} />
        </Field>

        <Field label="Email" error={errors.email?.message} htmlFor="email">
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={cn('field', errors.email && 'field-error')}
            {...register('email')}
          />
        </Field>

        <Field label="Phone" hint="optional" error={errors.phone?.message} htmlFor="phone">
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={cn('field', errors.phone && 'field-error')}
            {...register('phone')}
          />
        </Field>

        <Field label="I'm interested in" error={errors.interest?.message} htmlFor="interest">
          <select id="interest" className={cn('field', errors.interest && 'field-error')} {...register('interest')}>
            <option value="">Choose one…</option>
            {serviceInterests.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="How can we help?" error={errors.message?.message} htmlFor="message" className="sm:col-span-2">
          <textarea
            id="message"
            rows={5}
            className={cn('field resize-y', errors.message && 'field-error')}
            {...register('message')}
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isSubmitting} icon="arrowRight">
          {isSubmitting ? 'Sending…' : 'Send message'}
        </Button>

        <div aria-live="polite" className="min-h-[1.5rem] text-sm">
          <AnimatePresence mode="wait">
            {status && (
              <motion.p
                key={status}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease }}
                className={status === 'success' ? 'font-medium text-green-700' : 'font-medium text-red-600'}
              >
                {status === 'success'
                  ? 'Thank you — your email app should open to send this.'
                  : 'Something went wrong. Please call or text instead.'}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  error,
  htmlFor,
  className,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-navy-800">
        {label}
        {hint && <span className="ml-1 text-xs font-normal text-navy-400">({hint})</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
