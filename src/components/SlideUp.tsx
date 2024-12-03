import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  startY?: number;
  duration?: number;
  delay?: number;
}
const SlideUp = ({ 
  children, 
  startY = 50, 
  duration = 0.8, 
  delay = 0 
}: SlideUpProps ) => {
  const animationVariants = {
    offscreen: { y: startY, opacity: 0 },
    onscreen: {
      y: 0,
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

export default SlideUp;
