import React from 'react';
import { Box, Text, Flex, Skeleton, LinkOverlay } from '@chakra-ui/react';
import useCardContext from './Context/useCardContext';
const Name = () => {
  const { product } = useCardContext();
  return (
    <Text textAlign="center" textStyle="subtitle">
      {product && product.name}
    </Text>
  );
};

export default Name;
