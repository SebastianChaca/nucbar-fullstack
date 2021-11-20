import { Flex, Text } from '@chakra-ui/react';

import DropDown from './StockDropDownComponents/DropDown';

const StockDropdown = ({ product }) => {
  return (
    <Flex width="400px">
      <Flex alignItems="start">
        <Text mr="5px">Cantidad:</Text>
        <DropDown product={product} />
      </Flex>
      <Text color="nucba.grisDos" fontSize="12px" ml="3px">
        ({product.stock} disponibles )
      </Text>
    </Flex>
  );
};

export default StockDropdown;
