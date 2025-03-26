import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface MotionH1Props extends HTMLMotionProps<"h1"> {
  className?: string;
}

export const MotionH1 = forwardRef<HTMLDivElement, MotionH1Props>(
  ({ children, ...props }, ref) => {
    return (
      <motion.h1 ref={ref} {...props}>
        {children}
      </motion.h1>
    );
  }
);

MotionH1.displayName = "MotionH1"; // Helps debugging in React DevTools
