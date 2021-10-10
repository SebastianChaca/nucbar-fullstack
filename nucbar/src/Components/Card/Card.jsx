import {
  Box,
  Text,
  Image,
  Flex,
  Skeleton,
  LinkOverlay,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export const Card = ({
  index,
  showBtn,
  setShowBtn,
  lastElement,
  loading,
  product,
}) => {
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
    <Flex justifyContent="center" my="20px" position="relative">
      <Box
        w="220px"
        h="340px"
        bg="#ffffff"
        borderRadius="2px"
        py="10px"
        mr={{ md: '20px', lg: '20px' }}
        boxShadow="sm"
        _hover={{ boxShadow: '5px 5px 17px 1px rgba(181,78,159,0.36)' }}
      >
        <LinkOverlay as={ReachLink} to={`/product/${product?.id}`}>
          <Image
            m="auto"
            boxSize="220px"
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
          <hr />
          <Box mt="5px" mb="10px">
            <Text textAlign="center" fontSize="18px">
              {product && product.title}
            </Text>
            <Box ml="15px" mt="7px">
              <Flex alignItems="baseline">
                <Text fontSize="16px" fontWeight="500">
                  $
                  {product && product.descuento
                    ? product?.price * 0.9
                    : product?.price}
                </Text>
                {product && product.descuento && (
                  <Text fontSize="10px" as="s" color="gray.500" mx="5px">
                    ${product && product.price}
                  </Text>
                )}
                {product && product.descuento && (
                  <Text fontSize="13px" color="pink.500" fontWeight="500">
                    10% Off
                  </Text>
                )}
              </Flex>
              <Text fontSize="sm" color="gray.500" mt="2px">
                {product && product.shortDescription}
              </Text>
            </Box>
          </Box>
        </LinkOverlay>
      </Box>
      {/* {showBtn && (index === 0 || index === lastElement) && (
          <Btn index={index} lastElement={lastElement} />
        )} */}
      {/* {(index === 0 || index === lastElement) && (
          <Btn index={index} lastElement={lastElement} />
        )} */}
    </Flex>
  );
};
