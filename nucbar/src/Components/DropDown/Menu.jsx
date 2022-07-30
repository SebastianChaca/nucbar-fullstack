import React, { useRef } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import DropdownProvider from './DropdownProvider';

const Menu = ({ children }) => {
  const ref = useRef();

  return (
    <DropdownProvider ref={ref}>
      <Box ref={ref}>
        <Flex position="relative" m="0px">
          {children}
        </Flex>
      </Box>
    </DropdownProvider>
  );
};

export default Menu;
