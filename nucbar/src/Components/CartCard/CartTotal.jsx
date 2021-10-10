import { Text, Flex } from '@chakra-ui/layout';

export const CartTotal = () => {
  return (
    <Flex width="100%" justifyContent="right" mt="10px" p="20px">
      <Text fontSize="20px" fontWeight="600" mr="20px">
        Total : $1000
      </Text>
    </Flex>
  );
};

export default CartTotal;
