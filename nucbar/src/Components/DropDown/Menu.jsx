import React from 'react';
import { Flex } from '@chakra-ui/react';
const Menu = ({ children }) => {
  return (
    <>
      <Flex position="relative" m="0px">
        {children}
      </Flex>
    </>
  );
};

export default Menu;
