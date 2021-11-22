import { motion } from 'framer-motion';
import React from 'react';

const OpacityDiv = ({ children, open }) => {
  const variants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
    close: { opacity: 0 },
  };
  return (
    <motion.div
      variants={variants}
      initial={false}
      animate={open ? 'open' : 'close'}
    >
      {children}
    </motion.div>
  );
};

export default OpacityDiv;
