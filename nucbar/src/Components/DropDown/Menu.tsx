import React, { useRef } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import DropdownProvider from './Provider/DropdownProvider';
interface Props{
  children: JSX.Element
}
const Menu = ({ children }: Props) => {
  const ref = useRef(null);

  return (
    <DropdownProvider ref={ref}>
      <Box ref={ref} >
        <Flex position="relative" m="0px">
          {children}
        </Flex>
      </Box>
    </DropdownProvider>
  );
};

export default Menu;
