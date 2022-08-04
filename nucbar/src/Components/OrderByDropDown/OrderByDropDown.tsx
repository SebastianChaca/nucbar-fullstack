import { Flex, Text, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import usePrevious from '../../Hooks/usePrevious';
import { Menu, MenuButton, Menuitem, MenuItemGroup } from '../DropDown';

const OrderByDropDown = () => {
  const history = useHistory();
  const { search } = useLocation();
  const [select, setSelect] = useState<string | null>(null);
  const prevSelect = usePrevious(select);

  useEffect(() => {
    let filterType = select === 'Menor precio' ? 'price' : '-price';
    let replaceSelect = prevSelect === 'Menor precio' ? 'price' : '-price';
    let filterQuery = search.replace(`&sort=${replaceSelect}`, '');
    if (select) {
      history.push({
        pathname: 'products',
        search: `${filterQuery}&sort=${filterType}`,
      });
    }
  }, [select]);
  return (
    <Flex alignItems="center" mr="45px">
      <Text fontWeight="500"></Text>

      <Menu>
        <MenuButton color="nucba.primary" >
          <Text textStyle="regular" mr="5px">
            Ordernar por
          </Text>
          <Text textStyle="bodySemibold">{select}</Text>
        </MenuButton>

        <MenuItemGroup w="200px">
          <Menuitem
            onClick={() => {
              setSelect('Mayor precio');
            }}
          >
            Mayor precio
          </Menuitem>
          <Menuitem
            onClick={() => {
              setSelect('Menor precio');
            }}
          >
            Menor precio
          </Menuitem>
        </MenuItemGroup>
      </Menu>
    </Flex>
  );
};
export default OrderByDropDown;
