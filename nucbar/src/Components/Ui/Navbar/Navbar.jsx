import React from 'react';

import {
  Flex,
  useDisclosure,
  Button,
  Box,
  Text,
  Image,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { FiShoppingCart } from 'react-icons/fi';
import { LogBtn } from '../../Shared/SharedComponents';
import Logo from '../../../Assets/logo1.png';

import Sidebar from '../Sidebar/Sidebar';
import NavContainer from './NavContainer';
import { containerResponsive } from '../../../Utils/responsives';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const HamburguerBtn = () => {
    return (
      <Button
        display={{ sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}
        onClick={onOpen}
        background="none"
      >
        <GiHamburgerMenu style={{ fontSize: 30 }} color="#ffff" />

        <Sidebar isOpen={isOpen} onClose={onClose} />
      </Button>
    );
  };
  const RightBtns = () => {
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
              <Text fontSize="11px">0</Text>
            </Box>
          </Flex>
        </Link>
      </Flex>
    );
  };
  return (
    <>
      <NavContainer>
        <HamburguerBtn />
        <Box display={containerResponsive}>
          <Link to="/">
            <Image src={Logo} objectFit="contain" boxSize="80px" />
          </Link>
        </Box>
        <RightBtns />
      </NavContainer>
    </>
  );
};

export default NavBar;
