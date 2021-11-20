import { Flex } from '@chakra-ui/layout';
import React from 'react';

const MenuItemGroup = ({ children, ref }) => {
  return (
    <Flex
      w="200px"
      boxShadow="lg"
      borderRadius="5px"
      position="absolute"
      top="35px"
      left="0px"
      border="1px"
      borderColor="nucba.grisTres"
      zIndex="200"
      bg="nucba.form"
      flexDir="column"
      ref={ref}
    >
      {children}
    </Flex>
  );
};

export default MenuItemGroup;
