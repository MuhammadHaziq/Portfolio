import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  className?: string;
  id?: string;
}

export const MotionSection = forwardRef<HTMLDivElement, MotionSectionProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.section ref={ref} {...props}>
        {children}
      </motion.section>
    );
  }
);

MotionSection.displayName = "MotionSection"; // Helps debugging in React DevTools
