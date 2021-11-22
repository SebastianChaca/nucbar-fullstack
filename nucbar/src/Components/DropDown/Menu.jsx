import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
const Menu = ({ children, ref }) => {
  return (
    <Box ref={ref}>
      <Flex position="relative" m="0px">
        {children}
      </Flex>
    </Box>
  );
};

export default Menu;
