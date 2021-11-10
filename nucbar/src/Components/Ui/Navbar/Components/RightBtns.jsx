import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Box, Text } from '@chakra-ui/react';
import { containerResponsive } from '../../../../Utils/responsives';
import { Link } from 'react-router-dom';
import LogBtn from './LogBtn';
import { FiShoppingCart } from 'react-icons/fi';
const RightBtns = () => {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <Flex>
      <LogBtn display={containerResponsive} />
      <Link to="/cart">
        <Flex mr="10px" position="relative">
          <FiShoppingCart color="#fff" fontSize="20px" />
          <Box
            position="absolute"
            color="nucba.form"
            bottom={{ base: '15px', sm: '15px', md: '16px', lg: '16px' }}
            left="17px"
          >
            <Text fontSize="11px">{cartItems.length}</Text>
          </Box>
        </Flex>
      </Link>
    </Flex>
  );
};

export default RightBtns;
