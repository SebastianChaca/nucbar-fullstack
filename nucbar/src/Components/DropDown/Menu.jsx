import React from 'react';
import { Flex } from '@chakra-ui/react';
const Menu = ({ children, ref }) => {
  return (
    <>
      <Flex position="relative" m="0px" ref={ref}>
        {children}
      </Flex>
    </>
  );
};

export default Menu;
