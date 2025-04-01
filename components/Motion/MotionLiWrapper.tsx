import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface MotionLiProps extends HTMLMotionProps<"li"> {
  className?: string;
}

export const MotionLi = forwardRef<HTMLDivElement, MotionLiProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.li ref={ref} {...props}>
        {children}
      </motion.li>
    );
  }
);

MotionLi.displayName = "MotionLi"; // Helps debugging in React DevTools
