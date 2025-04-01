import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  className?: string;
}

export const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  }
);

MotionDiv.displayName = "MotionDiv"; // Helps debugging in React DevTools
