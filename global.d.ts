import { HTMLAttributes } from "react";
import { MotionProps } from "framer-motion";

declare module "framer-motion" {
  export interface MotionDivProps extends HTMLAttributes<HTMLDivElement>, MotionProps {}
  export interface MotionSectionProps extends HTMLAttributes<HTMLElement>, MotionProps {}
  export interface MotionSpanProps extends HTMLAttributes<HTMLSpanElement>, MotionProps {}
  export interface MotionPProps extends HTMLAttributes<HTMLParagraphElement>, MotionProps {}
  export interface MotionLi extends HTMLAttributes<HTMLParagraphElement>, MotionProps {}
}

// This ensures TypeScript recognizes 'className' in motion components globally.
