import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Banner from '../../Components/Banner/Banner';
import OrderByDropDown from '../../Components/OrderByDropDown/OrderByDropDown';
import Breadcrumb from '../../Components/BreadCrumb/Breadcrumb';
import { Flex, Box, Text } from '@chakra-ui/react';
import SwitcherCard from '../../Components/SwitcherCard/SwitcherCard';
import ProductsList from './ProductsList';

const Products = () => {
  const { category } = useParams();
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  });

  const items = ['Bebidas Alcoholicas', 'Whiskys'];
  return (
    <>
      <div ref={ref}></div>
      <Banner category={category} />
      <Box p="15px 25px 10px 25px">
        <Flex alignItems="center" justifyContent="space-between" mb="20px">
          <Breadcrumb items={items} />
          <OrderByDropDown />
        </Flex>
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Box ml="10px">
            <SwitcherCard text={'Envío gratis'} />
            <SwitcherCard text={'Desde 10% OFF'} discount />
            <Box mt="25px">
              <Text fontWeight="600" fontSize="18px">
                Marcas
              </Text>
              <Flex mt="8px">
                <Text
                  fontSize="13px"
                  fontWeight="400"
                  color="nucba.grisUno"
                  mr="4px"
                >
                  Marca 1
                </Text>
                <Text fontSize="13px" color="nucba.grisDos">
                  (2)
                </Text>
              </Flex>
              <Flex mt="8px">
                <Text
                  fontSize="13px"
                  fontWeight="400"
                  color="nucba.grisUno"
                  mr="4px"
                >
                  Marca 2
                </Text>
                <Text fontSize="13px" color="nucba.grisDos">
                  (4)
                </Text>
              </Flex>
            </Box>
          </Box>
          <ProductsList />
        </Flex>
      </Box>
    </>
  );
};

export default Products;
