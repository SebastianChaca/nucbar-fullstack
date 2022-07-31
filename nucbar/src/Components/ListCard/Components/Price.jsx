import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import useListContext from './useListContext';
const Price = () => {
  const { product } = useListContext();
  return (
    <>
      <Flex alignItems={'flex-end'}>
        <Box>
          {product?.descuento && (
            <Text fontSize="12px" as="s" color="gray.500">
              ${product?.price}
            </Text>
          )}
          <Text fontSize="23px" fontWeight="500" mr="10px">
            $
            {product && product.descuento
              ? product?.price * 0.9
              : product?.price}
          </Text>
        </Box>
        {product?.descuento && (
          <Text fontSize="13px" color="pink.500" fontWeight="500">
            10% OFF
          </Text>
        )}
      </Flex>
    </>
  );
};

export default Price;
