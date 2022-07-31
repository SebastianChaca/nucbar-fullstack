import { Text } from '@chakra-ui/react';
import React from 'react';
import useCardContext from './Context/useCardContext';

const Description = () => {
  const { product } = useCardContext();

  return (
    <Text textStyle="regular" color="nucba.grisUno" textAlign={'center'}>
      {product && product.shortDescription}
    </Text>
  );
};

export default Description;
