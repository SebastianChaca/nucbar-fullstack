import React from 'react';
import { Text } from '@chakra-ui/react';
import useListContext from './Context/useListContext';

const FreeShipping = () => {
  const { product } = useListContext();

  return (
    <>
      {product?.freeShipping && (
        <Text fontSize="13px" color="pink.500" fontWeight="700" mt="10px">
          Envío gratis
        </Text>
      )}
    </>
  );
};

export default FreeShipping;
