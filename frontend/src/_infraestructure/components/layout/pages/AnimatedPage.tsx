import { motion } from "motion/react";
import { ReactNode } from "react";

const AnimatedPage = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.25 }}
      className={className + " max-w-6xl mx-auto"}
      style={{ minHeight: "calc(100vh - 300px)" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
