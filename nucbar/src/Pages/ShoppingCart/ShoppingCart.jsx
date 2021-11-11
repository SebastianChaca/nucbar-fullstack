import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import CartCard from '../../Components/CartCard/CartCard';
import CartTotal from '../../Components/CartCard/CartTotal';
import CartTotalFixed from '../../Components/CartCard/CartTotalFixed';
import { useSelector } from 'react-redux';
const ShoppingCart = () => {
  const [heigth, setHeight] = useState();
  const { cartItems } = useSelector(state => state.cart);

  useEffect(() => {
    if (cartItems) {
      setHeight(cartItems.length * 50);
    }
  }, [cartItems]);
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
        {cartItems.map(item => {
          return <CartCard product={item} key={item.id} />;
        })}
        <CartTotal />
        {cartItems.length > 2 && heigth <= cartItems.length * 50 && (
          <CartTotalFixed />
        )}
      </Flex>
    </>
  );
};

export default ShoppingCart;
