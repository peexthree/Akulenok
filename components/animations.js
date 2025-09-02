export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};