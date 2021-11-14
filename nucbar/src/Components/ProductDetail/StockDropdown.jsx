import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
const StockDropdown = ({ product }) => {
  const DropDown = () => {
    return (
      <Menu>
        <MenuButton bg="none" _hover={{ bg: 'none' }} mr="5px" p={0}>
          <Flex alignItems="center">
            <Text textStyle="semiBold">1 unidad</Text>
            <ChevronDownIcon color="nucba.primary" />
          </Flex>
        </MenuButton>
        <MenuList>
          {[...Array(product.stock).keys()].map((item, index) => {
            return (
              <MenuItem
                style={{ fontSize: 20 }}
                key={product.id}
                value={item + 1}
              >
                {item + 1} unidad
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  };
  return (
    <Flex>
      <Flex>
        <Text mr="5px">Cantidad:</Text>
        <DropDown />
      </Flex>
      <Text color="nucba.grisDos" fontSize="12px">
        ({product.stock} disponibles )
      </Text>
    </Flex>
  );
};

export default StockDropdown;
