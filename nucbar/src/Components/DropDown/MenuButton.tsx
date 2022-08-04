import { Button, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { MenuButtonProps } from './interfaces';
import useDropdownContext from './Provider/useDropdownContext';

const MenuButton = ({ onClick, children, color }: MenuButtonProps ) => {
  const { open, handleOpen} = useDropdownContext()
  const variants = {
    open: { rotate: 180 },
    close: { rotate: 0 },
  };

  const handleClick = () => {
    handleOpen()
    onclick && onClick?.();
  };
  return (
    <Button
      bg="none"
      _hover={{ bg: 'none' }}
      _focus={{ outline: 'none' }}
      p={0}
      onClick={handleClick}
    >
      {children}
      <motion.div
        variants={variants}
        animate={open ? 'open' : 'close'}
        transition={{ duration: 0.4 }}
      >
        <Box mx="1px">
          <ChevronDownIcon color={color} />
        </Box>
      </motion.div>
    </Button>
  );
};

export default MenuButton;
