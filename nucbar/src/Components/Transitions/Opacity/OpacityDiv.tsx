import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  children: JSX.Element | JSX.Element[];
  open: boolean;
}
const OpacityDiv = ({ children, open }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpacityDiv;
