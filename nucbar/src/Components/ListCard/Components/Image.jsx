import React from 'react';
import { Image as ChakraImage } from '@chakra-ui/image';
import useListContext from './useListContext';
const Image = () => {
  const { product } = useListContext();
  return (
    <ChakraImage
      boxSize="180px"
      objectFit="contain"
      src={
        product
          ? product.image
          : 'https://hogarcenter.com.ar/imagenes_productos/default.png'
      }
    />
  );
};

export default Image;
