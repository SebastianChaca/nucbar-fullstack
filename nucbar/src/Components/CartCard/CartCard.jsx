import { Flex, Text, Box, Image } from '@chakra-ui/react';
import React from 'react';
import QuantityComponent from './QuantityComponent';

const CartCard = () => {
  return (
    <Box pb="10px">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        px="40px"
        my="40px"
      >
        <Flex alignItems="center">
          <Image
            boxSize="120px"
            objectFit="contain"
            src="https://res.cloudinary.com/dxexw8kqg/image/upload/v1618110791/chupi3_ea3d326f02.png"
            mr="10px"
          />
          <Text fontSize="18px">Whisky Mccallan 18años</Text>
        </Flex>
        <QuantityComponent />
        <Text fontSize="18px">$50000</Text>
      </Flex>
      <hr />
    </Box>
  );
};

export default CartCard;
