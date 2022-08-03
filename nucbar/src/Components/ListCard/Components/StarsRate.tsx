import Stars from '../../StarsRate/StarsRate';
import { Flex } from '@chakra-ui/react';
import useListContext from './Context/useListContext';

const StarsRate = () => {
  const { product } = useListContext();
  return (
    <Flex mr="50px">
      <Stars rate={product.rate} />
    </Flex>
  );
};

export default StarsRate;
