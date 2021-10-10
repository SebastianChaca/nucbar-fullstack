import { Text, Flex } from '@chakra-ui/layout';
import StarsRate from '../StarsRate/StarsRate';

const PriceDetail = ({ product }) => {
  console.log(product);
  if (!product) {
    return <h1>Producto no disponible</h1>;
  }
  return (
    <Flex
      justifyContent="flex-start"
      alignItems="left"
      alignContent="center"
      flexDir="column"
      w="400px"
    >
      <Text fontWeight="600" fontSize="25px" mb="10px">
        {product?.title}
      </Text>
      <StarsRate rate={product.rate} />
      <Text fontWeight="400" fontSize="35px" my="10px">
        ${product?.price}
      </Text>
      <Text fontWeight="600" fontSize="15px" color="nucba.grisUno" mb="10px">
        {product?.description}
      </Text>
    </Flex>
  );
};

export default PriceDetail;
