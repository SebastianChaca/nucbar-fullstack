import { Flex, Text, Box } from '@chakra-ui/layout';
import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

const QuantityComponent = () => {
  return (
    <Flex
      borderRadius="8px"
      border="1px solid rgba(0,0,0,0.1)"
      justifyContent="space-between"
      alignItems="center"
      width="120px"
      h="40px"
      px="15px"
    >
      <Box color="nucba.fourth">
        <BiMinus fontSize="20px" />
      </Box>
      <Text>1</Text>
      <Box color="nucba.third">
        <BsPlus fontSize="20px" />
      </Box>
    </Flex>
  );
};

export default QuantityComponent;
