import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Redux/Actions/cartActions';
import { useHistory } from 'react-router-dom';
import StockDropdown from './StockDropdown';
function BuyCard({ product }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCart = () => {
    dispatch(addItem(product));
    history.push('/cart');
  };
  if (!product) {
    return <h1>Productos no disponibles</h1>;
  }
  return (
    <Box
      border="1px solid rgba(0,0,0,0.1)"
      borderRadius="8px"
      p="25px 26px"
      lineHeight="40px"
      w="300px"
    >
      {product.stock > 0 && <Text textStyle="semiBold">Stock disponibe </Text>}

      <StockDropdown product={product} />

      <Flex flexDir="column" mt="25px">
        <Button
          variant="primary"
          textStyle="title"
          p="0px 24px"
          h="48px"
          my="10px"
        >
          Comprar ahora
        </Button>
        <Button
          bg="nucba.fourth"
          color="nucba.primary"
          textStyle="title"
          p="0px 24px"
          h="48px"
          onClick={handleCart}
        >
          Agregar al carrito
        </Button>
      </Flex>
    </Box>
  );
}

export default BuyCard;
