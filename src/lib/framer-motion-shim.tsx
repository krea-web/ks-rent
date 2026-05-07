/**
 * Drop-in replacement minimale di framer-motion per Astro SSG.
 *
 * Why: framer-motion pesa ~100 KB minified e gira solo client-side,
 * ma le animazioni Framer non sono visibili ai bot e penalizzano CWV.
 * Lo shim sostituisce <motion.X> con <X> puri, ignorando le props
 * di animazione (initial/animate/whileInView/transition/variants/...).
 * Astro genera HTML pulito senza style inline "opacity:0".
 *
 * How to apply: alias `framer-motion` → `@/lib/framer-motion-shim`
 * in astro.config.mjs (vite.resolve.alias). Tutti gli `import { motion }
 * from "framer-motion"` esistenti continuano a funzionare senza modifiche.
 *
 * Trade-off: niente animazioni Framer (zoom/spring/drag). Per gli effetti
 * essenziali si usano CSS animations Tailwind (`animate-in fade-in`).
 */
import { forwardRef, createElement, type ReactNode } from "react";

const FILTERED_PROPS = new Set([
  "initial",
  "animate",
  "exit",
  "whileInView",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "transition",
  "viewport",
  "variants",
  "custom",
  "layout",
  "layoutId",
  "layoutScroll",
  "layoutDependency",
  "drag",
  "dragConstraints",
  "dragElastic",
  "dragMomentum",
  "dragControls",
  "dragListener",
  "dragSnapToOrigin",
  "dragTransition",
  "dragPropagation",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onDrag",
  "onDragStart",
  "onDragEnd",
  "onHoverStart",
  "onHoverEnd",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "transformTemplate",
  "inherit",
  "transformValues",
]);

function strip(props: Record<string, any>): Record<string, any> {
  const out: Record<string, any> = {};
  for (const k in props) if (!FILTERED_PROPS.has(k)) out[k] = props[k];
  return out;
}

const componentCache = new Map<string, any>();

export const motion: any = new Proxy(
  {},
  {
    get(_target, tag: string) {
      let cached = componentCache.get(tag);
      if (!cached) {
        cached = forwardRef<any, any>(function MotionShim(props, ref) {
          return createElement(tag, { ref, ...strip(props) });
        });
        cached.displayName = `motion.${tag}`;
        componentCache.set(tag, cached);
      }
      return cached;
    },
  },
);

export const AnimatePresence = ({ children }: { children?: ReactNode }) => (
  <>{children}</>
);

export const LazyMotion = ({ children }: { features?: any; children?: ReactNode }) => (
  <>{children}</>
);

export const m = motion;
export const domAnimation = {};
export const domMax = {};

export type Variants = Record<string, any>;
export type Transition = Record<string, any>;
export type AnimationProps = Record<string, any>;
export type MotionProps = Record<string, any>;

// No-op hooks per compat con view che usano useScroll/useTransform/useMotionValue
export const useScroll = () => ({
  scrollX: { get: () => 0, set: () => {}, on: () => () => {} },
  scrollY: { get: () => 0, set: () => {}, on: () => () => {} },
  scrollXProgress: { get: () => 0, set: () => {}, on: () => () => {} },
  scrollYProgress: { get: () => 0, set: () => {}, on: () => () => {} },
});

export const useTransform = (_input: any, _output: any) => ({
  get: () => 0,
  set: () => {},
  on: () => () => {},
});

export const useMotionValue = (initial: any) => ({
  get: () => initial,
  set: () => {},
  on: () => () => {},
});

export const useSpring = useMotionValue;
export const useAnimation = () => ({
  start: () => Promise.resolve(),
  stop: () => {},
  set: () => {},
});
export const useInView = () => true;
export const useReducedMotion = () => false;
