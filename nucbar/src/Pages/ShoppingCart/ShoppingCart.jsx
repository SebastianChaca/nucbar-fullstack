import { Flex } from '@chakra-ui/react';
import React from 'react';
import CartCard from '../../Components/CartCard/CartCard';

import { useSelector } from 'react-redux';

import Totals from './Totals';
const ShoppingCart = () => {
  const { cartItems } = useSelector(state => state.cart);

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
        <Totals />
      </Flex>
    </>
  );
};

export default ShoppingCart;
