import { Text } from '@chakra-ui/react';
import useListContext from './Context/useListContext';
const Description = () => {
  const { product } = useListContext();
  return (
    <Text fontSize="sm" color="gray.500" mt="15px">
      {product && product.shortDescription}
    </Text>
  );
};

export default Description;
