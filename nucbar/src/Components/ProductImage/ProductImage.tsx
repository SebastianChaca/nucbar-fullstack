import React from 'react';
import { Image } from '@chakra-ui/image';
interface Props {
  image: string | undefined;
  boxSize: string;
}
const ProductImage = ({ image, boxSize }: Props) => {
  return (
    <Image
      boxSize={boxSize}
      objectFit="contain"
      src={
        image
          ? image
          : 'https://hogarcenter.com.ar/imagenes_productos/default.png'
      }
      mb="5px"
    />
  );
};

export default ProductImage;
