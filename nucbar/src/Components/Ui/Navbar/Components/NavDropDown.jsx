import { Box, Text, Flex } from '@chakra-ui/layout';
import React from 'react';
import useDropDown from '../../../../Hooks/useDropDown';
import { useSelector } from 'react-redux';
import { Menu, MenuButton, Menuitem, MenuItemGroup } from '../../../DropDown';
import { useDispatch } from 'react-redux';
import { singOut } from '../../../../Redux/Actions/userActions';
import LogBtn from './LogBtn';
import { containerResponsive } from '../../../../Utils/responsives';
import { Avatar } from '@chakra-ui/avatar';
import { Link } from 'react-router-dom';
const NavDropDown = () => {
  const { open, handleOpen, ref } = useDropDown();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(singOut());
  };
  if (!user.currentUser) {
    return <LogBtn display={containerResponsive} />;
  }
  const name = user?.currentUser?.name;
  const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <Box mr="10px" display={containerResponsive}>
      <Menu>
        <MenuButton onClick={() => handleOpen()} open={open} color="nucba.form">
          <Avatar name={name} bg={'nucba.fourth'} size="sm" mr="10px" />
          <Text color="nucba.form" textStyle="semiBold">
            {upperCaseName}
          </Text>
        </MenuButton>

        <Box ref={ref}>
          <MenuItemGroup w="150px" open={open}>
            <Menuitem onClick={handleOpen}>
              <Flex
                alignItems="center"
                justifyContent="center"
                p="15px"
                w="100%"
              >
                <Link to="/user">
                  <Text textStyle="captionRegular">Configuración</Text>
                </Link>
              </Flex>
            </Menuitem>
            <Menuitem onClick={signOut}>
              <Flex
                alignItems="center"
                justifyContent="center"
                p="15px"
                w="100%"
              >
                <Text textStyle="captionRegular">Cerrar sesión</Text>
              </Flex>
            </Menuitem>
          </MenuItemGroup>
        </Box>
      </Menu>
    </Box>
  );
};

export default NavDropDown;
