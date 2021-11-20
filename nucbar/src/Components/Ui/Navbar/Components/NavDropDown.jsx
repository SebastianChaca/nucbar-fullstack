import { Box, Text, Flex } from '@chakra-ui/layout';
import React from 'react';
import useDropDown from '../../../../Hooks/useDropDown';
import { useSelector } from 'react-redux';
import { Menu, MenuButton, Menuitem, MenuItemGroup } from '../../../DropDown';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { singOut } from '../../../../Redux/Actions/userActions';
import LogBtn from './LogBtn';
import { containerResponsive } from '../../../../Utils/responsives';
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
  return (
    <Box mr="10px" display={containerResponsive}>
      <Menu>
        <MenuButton onClick={() => handleOpen()}>
          <Text color="nucba.form" textStyle="semiBold">
            {user?.currentUser?.name}
          </Text>
        </MenuButton>

        {open && (
          <Box ref={ref}>
            <MenuItemGroup w="120px">
              <Menuitem onClick={signOut}>
                <Flex alignItems="center">
                  <BiLogOut />
                  <Text ml="5px" textStyle="captionRegular">
                    Cerrar sesión
                  </Text>
                </Flex>
              </Menuitem>
            </MenuItemGroup>
          </Box>
        )}
      </Menu>
    </Box>
  );
};

export default NavDropDown;
