import { motion } from 'framer-motion';

const FadeIn = ({
  children,
  duration = 0.8,
  delay = 0,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}) => {
  const animationVariants = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: { duration, delay, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={animationVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
