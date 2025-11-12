import { motion } from "framer-motion";

export default function MotionSection({ children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
}
