import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ListCard from '../../Components/ListCard/ListCard';
import Banner from '../../Components/Banner/Banner';
import OrderByDropDown from '../../Components/OrderByDropDown/OrderByDropDown';
import Breadcrumb from '../../Components/BreadCrumb/Breadcrumb';
import { Flex, Box, Text } from '@chakra-ui/react';
import SwitcherCard from '../../Components/SwitcherCard/SwitcherCard';
import { url } from '../../Utils/apiUrl';
import useFetch from '../../Hooks/useFetch';
import { fetchProducts } from '../../Redux/Actions/prodcutsActions';
import { LoadingSpinner } from '../../Components/Shared/SharedComponents';

const Products = () => {
  const { category } = useParams();
  const { products } = useSelector(state => state.products);
  const { loading, fetchData } = useFetch();
  const filteredProducts = products?.data?.products.filter(
    p => p.category === category
  );

  useEffect(() => {
    if (!products) {
      fetchData('get', `${url}/products`, fetchProducts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!products) {
    return <h1>No Hay productos</h1>;
  }
  const items = ['Bebidas Alcoholicas', 'Whiskys'];
  return (
    <>
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
          <Box>
            {filteredProducts.map((product, index) => {
              return <ListCard product={product} index={index} />;
            })}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Products;
