import React from 'react';
import { Box } from '@chakra-ui/react';

import useListContext from './useListContext';
const Container = ({ children, index }) => {
  const { setShowEnter, setShowLeave } = useListContext();
  return (
    <Box
      mb="2px"
      justifyContent="right"
      position="relative"
      w={'100%'}
      bg="nucba.form"
      p="40px"
      borderRadius={index === 0 && '5px 5px 0px 0px'}
      lineHeight="19px"
      onMouseEnter={() => setShowEnter()}
      onMouseLeave={() => setShowLeave()}
    >
      {children}
    </Box>
  );
};

export default Container;
