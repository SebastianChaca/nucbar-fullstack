import { useState, useEffect } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import CartCard from '../../Components/CartCard/CartCard';
import CartTotal from '../../Components/CartCard/CartTotal';
import CartTotalFixed from '../../Components/CartCard/CartTotalFixed';

const ShoppingCart = () => {
  const [heigth, setHeight] = useState();
  const products = 8;
  const productsLenght = 8;
  useEffect(() => {
    if (products) {
      setHeight(productsLenght * 160);
    }
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener('scroll', () => {});
  });

  return (
    <>
      <Flex
        bg="nucba.form"
        borderRadius="8px"
        border="1px solid rgba(0,0,0,0.1)"
        boxShadow="md"
        flexDir="column"
        posiiton="relative"
        m="auto"
        mt="50px"
        mb="50px"
        w="1300px"
      >
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartTotal />
        {productsLenght > 2 && heigth <= productsLenght * 160 && (
          <CartTotalFixed />
        )}
      </Flex>
    </>
  );
};

export default ShoppingCart;
