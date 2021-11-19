import React from 'react';
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
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import InputMenuItem from './InputMenuItem';

const DropDown = ({ product }) => {
  const [value, setValue] = useState(1);

  const [open, setOpen] = useState(false);

  const handleClick = value => {
    setValue(value);
    setOpen(!open);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSubmit = applyValue => {
    setValue(applyValue);
  };
  return (
    <Flex position="relative" m="0px">
      <Button
        bg="none"
        _hover={{ bg: 'none' }}
        _focus={{ outline: 'none' }}
        p={0}
        onClick={() => handleOpen()}
      >
        <Flex alignItems="center" w="90px">
          <Text textStyle="semiBold">
            {value}
            {value > 1 ? ' unidades' : ' unidad'}
          </Text>
          <Box mx="3px">
            <ChevronDownIcon color="nucba.primary" />
          </Box>
        </Flex>
      </Button>
      {open && (
        <Flex
          w="200px"
          boxShadow="lg"
          borderRadius="5px"
          position="absolute"
          top="35px"
          left="0px"
          border="1px"
          borderColor="nucba.grisTres"
          zIndex="200"
          bg="nucba.form"
          flexDir="column"
        >
          {[...Array(product.stock).keys()].map((item, index) => {
            const producto = item + 1;
            if (producto === 6) {
              return (
                <InputMenuItem
                  handleSubmit={handleSubmit}
                  handleClose={handleOpen}
                />
              );
            }
            if (producto > 6) {
              return null;
            }
            return (
              <Button
                onClick={() => handleClick(producto)}
                p={0}
                bg={producto === value && 'nucba.fourth'}
                borderRadius="0px"
              >
                <Text
                  borderLeft={producto === value && '2px'}
                  w="100%"
                  h="40px"
                  p="10px"
                  textStyle={producto === value ? 'semiBold' : 'regular'}
                  color={producto === value && 'nucba.primary'}
                >
                  {producto}
                  {producto > 1 ? ' unidades' : ' unidad'}
                </Text>
              </Button>
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};

export default DropDown;
