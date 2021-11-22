import React from 'react';
import { Flex } from '@chakra-ui/react';

const DashContainer = ({ open, children }) => {
  return (
    <Flex
      bg="nucba.form"
      p="30px"
      w="100%"
      flexDir="column"
      alignItems="left"
      h="calc(100vh - 80px)"
      position="relative"
      zIndex={100}
      boxShadow={open && '9px 0px 8px -7px rgba(0, 0, 0, 0.5)'}
    >
      {children}
    </Flex>
  );
};

export default DashContainer;
