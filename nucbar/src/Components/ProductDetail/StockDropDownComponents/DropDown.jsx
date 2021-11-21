import { Box, Flex, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import InputMenuItem from './InputMenuItem';
import { Menu, MenuButton, Menuitem, MenuItemGroup } from '../../DropDown';
import useDropDown from '../../../Hooks/useDropDown';
import { motion } from 'framer-motion';

const DropDown = ({ product, value, setValue }) => {
  const { open, handleOpen, ref } = useDropDown();
  const handleClick = value => {
    setValue(value);
    handleOpen();
  };

  const handleSubmit = applyValue => {
    setValue(applyValue);
  };
  return (
    <Menu>
      <MenuButton onClick={() => handleOpen()}>
        <Flex alignItems="center" w="90px">
          <Text textStyle="semiBold">
            {value}
            {value > 1 ? ' unidades' : ' unidad'}
          </Text>
          <motion.div
            animate={open ? { rotate: [0, 180] } : { rotate: [180, 0] }}
            transition={{ duration: 0.4 }}
          >
            <Box mx="1px">
              <ChevronDownIcon color="nucba.primary" />
            </Box>
          </motion.div>
        </Flex>
      </MenuButton>

      {open && (
        <div ref={ref}>
          <MenuItemGroup w="200px">
            {[...Array(product.stock).keys()].map((item, index) => {
              const producto = item + 1;
              if (producto === 6) {
                return (
                  <InputMenuItem
                    handleSubmit={handleSubmit}
                    handleClose={handleOpen}
                    product={product}
                  />
                );
              }
              if (producto > 6) {
                return null;
              }
              return (
                <Menuitem
                  onClick={() => handleClick(producto)}
                  bg={producto === value && 'nucba.fourth'}
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
                </Menuitem>
              );
            })}
          </MenuItemGroup>
        </div>
      )}
    </Menu>
  );
};

export default DropDown;
