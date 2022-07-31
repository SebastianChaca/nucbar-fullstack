import React from 'react';
import Stars from '../../StarsRate/StarsRate';
import { Flex } from '@chakra-ui/react';
import useListContext from './useListContext';

const StarsRate = () => {
  const { product } = useListContext();
  return (
    <Flex mr="50px">
      <Stars rate={product.rate} />
    </Flex>
  );
};

export default StarsRate;
