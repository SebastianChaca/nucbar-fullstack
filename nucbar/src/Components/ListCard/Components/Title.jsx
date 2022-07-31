import React from 'react';
import useListContext from './useListContext';
import { Text } from '@chakra-ui/react';
const Title = () => {
  const { product } = useListContext();
  console.log(product);
  return (
    <Text fontSize="23px" fontWeight="100" mb="30px">
      {product?.name}
    </Text>
  );
};

export default Title;
