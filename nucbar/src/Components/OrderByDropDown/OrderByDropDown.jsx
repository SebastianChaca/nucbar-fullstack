import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';

import { BiChevronDown } from 'react-icons/bi';
const DropDown = () => {
  return (
    <Flex position="relative" zIndex={1000}>
      <Menu>
        <MenuButton
          as={Button}
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          _focus={{ outline: 'none' }}
          _active={{ bg: 'transparent' }}
          w="145px"
        >
          <Flex justifyContent="center" alignItems="center">
            <Text fontWeight="350">Más relevantes</Text>
            <Flex ml="3px" color="nucba.third" fontSize="25px">
              <BiChevronDown />
            </Flex>
          </Flex>
        </MenuButton>
        <MenuList minWidth="110px" pt="0" pb="0">
          <MenuItem>Mayor precio</MenuItem>
          <MenuItem>Menor precio</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
const OrderByDropDown = () => {
  return (
    <Flex alignItems="center" mr="45px">
      <Text fontWeight="500">Ordernar por</Text>
      <DropDown />
    </Flex>
  );
};
export default OrderByDropDown;
