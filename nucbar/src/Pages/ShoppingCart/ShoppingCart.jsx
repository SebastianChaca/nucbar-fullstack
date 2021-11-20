import { Flex } from '@chakra-ui/react';
import React from 'react';
import CartCard from '../../Components/CartCard/CartCard';
import { useSelector } from 'react-redux';
import Totals from './Totals';

const ShoppingCart = () => {
  const { cartItems, totals } = useSelector(state => state.cart);

  return (
    <>
      <Flex
        bg={totals.quantity > 0 && 'nucba.form'}
        borderRadius="8px"
        border={totals.quantity > 0 && '1px solid rgba(0,0,0,0.1)'}
        boxShadow={totals.quantity > 0 && 'md'}
        flexDir="column"
        posiiton="relative"
        m="auto"
        mt="50px"
        mb="50px"
        w={totals.quantity < 1 ? '500px' : '1300px'}
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
