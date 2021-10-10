import { Box, Flex, Text } from '@chakra-ui/layout';
import CartTotal from './CartTotal';

const CartTotalFixed = () => {
  return (
    <Box
      bottom="10px"
      position="fixed"
      border="1px solid rgba(0,0,0,0.1)"
      boxShadow="dark-lg"
      bg="nucba.form"
      w="1300px"
      p="20px"
    >
      <Flex width="100%" justifyContent="right">
        <Text fontSize="20px" fontWeight="600">
          Total : $1000
        </Text>
      </Flex>
    </Box>
  );
};

export default CartTotalFixed;
