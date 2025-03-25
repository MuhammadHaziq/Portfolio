import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface MotionSpanProps extends HTMLMotionProps<"span"> {
  className?: string;
}

export const MotionSpan = forwardRef<HTMLDivElement, MotionSpanProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.span ref={ref} {...props}>
        {children}
      </motion.span>
    );
  }
);

MotionSpan.displayName = "MotionSpan"; // Helps debugging in React DevTools
