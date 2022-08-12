import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import CardProvider from './Context/CardProvider';

import { Product } from '../../../Interfaces/BDInterfaces';

interface Props {
  children: JSX.Element | JSX.Element[];
  product: Product | null;
}
const Container = ({ product, children }: Props) => {
  return (
    <CardProvider product={product}>
      <Flex justifyContent="center" my="20px" position="relative">
        <Box
          w="220px"
          h="350px"
          bg="#ffffff"
          borderRadius="2px"
          py="10px"
          mr={{ md: '20px', lg: '20px' }}
          boxShadow="sm"
          _hover={{ boxShadow: '5px 5px 17px 1px rgba(181,78,159,0.36)' }}
        >
          {children}
        </Box>
      </Flex>
    </CardProvider>
  );
};

export default Container;
