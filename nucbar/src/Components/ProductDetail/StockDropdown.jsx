import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Text,
  Button,
  MenuOptionGroup,
  MenuItemOption,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
const StockDropdown = ({ product }) => {
  const [value, setValue] = useState(1);
  const [open, setOpen] = useState(false);
  const handleClick = value => {
    setValue(value);
  };
  const handleIcon = () => {
    console.log('ola');
  };
  // console.log(open);
  const DropDown = () => {
    return (
      <Menu>
        <MenuButton
          bg="none"
          _hover={{ bg: 'none' }}
          mr="5px"
          p={0}
          onClick={() => handleIcon()}
        >
          <Flex alignItems="center">
            <Text textStyle="semiBold">{value} unidad</Text>
            <ChevronDownIcon color="nucba.primary" />
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuOptionGroup>
            {[...Array(product.stock).keys()].map((item, index) => {
              return (
                <MenuItemOption
                  key={product.id}
                  value={item + 1}
                  onClick={e => handleClick(item + 1)}
                >
                  {item + 1} unidad
                </MenuItemOption>
              );
            })}
          </MenuOptionGroup>
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
