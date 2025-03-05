import { motion } from "framer-motion";
// import { ProgressSpinner } from "primereact/progressspinner";
import { useEffect } from "react";

// const pulseVariants: Variants = {
//   hidden: { opacity: 0, scale: 0 },
//   visible: (index: number) => ({
//     opacity: 0.1,
//     scale: 1 + index * 0.2,
//     transition: {
//       duration: 1.5,
//       delay: index * 0.2,
//       repeat: Infinity,
//       repeatType: "reverse",
//       ease: "easeInOut",
//     },
//   }),
// };

const FullScreenLoading = () => {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-md grid place-content-center"
    >
      {/* <div className="relative z-50 flex items-center justify-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={pulseVariants}
            initial="hidden"
            animate="visible"
            className="absolute bg-primary/25 backdrop-blur-lg rounded-full size-80 sm:size-32"
          />
        ))}
        <ProgressSpinner className="relative size-12 sm:size-16" />
      </div>
      <span className="text-white font-semibold text-lg">Cargando</span> */}
    </motion.div>
  );
};

export default FullScreenLoading;
