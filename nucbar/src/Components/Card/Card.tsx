import { Box, Skeleton, LinkOverlay } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { Product } from '../../Interfaces/BDInterfaces';
import ProductImage from '../ProductImage/ProductImage';
import { CardItems } from './Components';
interface Props {
  product: Product | null;
  loading?: boolean;
}
export const Card = ({ loading, product }: Props) => {
  if (loading) {
    return (
      <Skeleton
        startColor="pink.500"
        endColor="orange.500"
        w="230px"
        h="330px"
        bg="#ffffff"
        borderRadius="2px"
        py="10px"
        mr={{ md: '20px', lg: '20px' }}
      />
    );
  }

  return (
    <CardItems.Container product={product}>
      <LinkOverlay as={ReachLink} to={`/product/${product?.id}`}>
        <ProductImage product={product} boxSize="220px" />
        <hr />
        <Box mt="15px" mb="10px" alignContent={'center'}>
          <CardItems.Name />
          <CardItems.Price />
          <CardItems.Description />
        </Box>
      </LinkOverlay>

      {/* {showBtn && (index === 0 || index === lastElement) && (
          <Btn index={index} lastElement={lastElement} />
        )} */}
      {/* {(index === 0 || index === lastElement) && (
          <Btn index={index} lastElement={lastElement} />
        )} */}
    </CardItems.Container>
  );
};
