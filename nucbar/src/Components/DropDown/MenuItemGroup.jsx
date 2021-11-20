import { Flex } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import React from 'react';

const MenuItemGroup = ({ children, ref, w }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      transition={{ duration: 0.15 }}
    >
      <Flex
        w={w}
        boxShadow="lg"
        borderRadius="5px"
        position="absolute"
        top="35px"
        right="-10px"
        border="1px"
        borderColor="nucba.grisTres"
        zIndex="200"
        bg="nucba.form"
        flexDir="column"
        ref={ref}
      >
        {children}
      </Flex>
    </motion.div>
  );
};

export default MenuItemGroup;
