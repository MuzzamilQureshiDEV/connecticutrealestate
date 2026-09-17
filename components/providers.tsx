'use client';

import { MotionConfig } from 'framer-motion';

/**
 * Client-side providers. `reducedMotion="user"` makes every Framer Motion
 * animation on the site honour the visitor's OS setting automatically.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
