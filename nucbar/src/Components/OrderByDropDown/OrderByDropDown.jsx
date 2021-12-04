import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { BiChevronDown } from 'react-icons/bi';
const DropDown = ({ select, handleClick }) => {
  //rehacer este componente con mi dropdown
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
            <Text fontWeight="350">{select ? select : 'Mas relevantes'}</Text>
            <Flex ml="3px" color="nucba.third" fontSize="25px">
              <BiChevronDown />
            </Flex>
          </Flex>
        </MenuButton>
        <MenuList
          minWidth="110px"
          pt="0"
          pb="0"
          onClick={e => {
            handleClick(e);
          }}
        >
          <MenuItem value="Mayor precio">Mayor precio</MenuItem>
          <MenuItem value="Menor precio">Menor precio</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
const OrderByDropDown = () => {
  const history = useHistory();
  const { search } = useLocation();
  const [select, setSelect] = useState(null);

  const handleClick = e => {
    setSelect(e.target.value);
    let filterType = select == 'Menor precio' ? 'price' : '-price';
    console.log(select);
    // let filterQuery = search.replace(`&sort=${select}`, ' ');
    // const query = `${filterQuery}&sort=${filterType}`;
    // console.log(query);
    // history.push({
    //   pathname: 'products',
    //   search: query,
    // });
  };
  return (
    <Flex alignItems="center" mr="45px">
      <Text fontWeight="500">Ordernar por</Text>
      <DropDown select={select} handleClick={handleClick} />
    </Flex>
  );
};
export default OrderByDropDown;
