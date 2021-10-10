import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import BuyCard from './BuyCard';
import PriceDetail from './PriceDetail';

const ProductDetail = ({ product }) => {
  return (
    <Flex
      bg="nucba.form"
      p="10"
      m="10"
      borderRadius="8px"
      border="1px solid rgba(0,0,0,0.1)"
      boxShadow="md"
      justifyContent="space-around"
    >
      <Image
        boxSize="320px"
        objectFit="contain"
        src={
          product
            ? product.image
              ? product.image.url
              : product.imageFromDash
            : 'https://hogarcenter.com.ar/imagenes_productos/default.png'
        }
        mb="5px"
      />
      <PriceDetail product={product} />
      <BuyCard product={product} />
    </Flex>
  );
};

export default ProductDetail;
