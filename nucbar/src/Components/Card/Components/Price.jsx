import React from 'react';
import useCardContext from './Context/useCardContext';
import { Text, Flex } from '@chakra-ui/react';
const Price = () => {
  const { product } = useCardContext();
  return (
    <Flex alignItems="baseline" justifyContent={'center'} mt="10px">
      <Text fontSize="16px" fontWeight="500">
        ${product && product.descuento ? product?.price * 0.9 : product?.price}
      </Text>
      {product && product.descuento && (
        <Text as="s" color="nucba.grisDos" mx="5px" textStyle="captionSemiBold">
          ${product && product.price}
        </Text>
      )}
      {product && product.descuento && (
        <Text color="nucba.third" textStyle="semiBold">
          10% Off
        </Text>
      )}
    </Flex>
  );
};

export default Price;
