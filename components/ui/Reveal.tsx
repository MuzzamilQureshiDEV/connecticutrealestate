'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

/** Shared easing so every entrance animation feels like one system. */
export const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number;
  y?: number;
  amount?: number;
};

/**
 * Fades and lifts content as it scrolls into view.
 * Framer Motion respects `prefers-reduced-motion` via <MotionConfig> in the
 * root layout, so no extra handling is needed here.
 */
export function Reveal({ delay = 0, y = 22, amount = 0.25, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, ease, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Staggers direct children — useful for card grids. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}
