import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import ListCard from '../../Components/ListCard/ListCard';
import { url } from '../../Utils/apiUrl';
import useFetch from '../../Hooks/useFetch';
import { fetchProducts } from '../../Redux/Actions/prodcutsActions';
import {
  GoHome,
  LoadingSpinner,
} from '../../Components/Shared/SharedComponents';

const ProductsList = () => {
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
  }, [products]);

  if (loading) {
    return (
      <Flex justifyContent="center" w="100%">
        <LoadingSpinner />
      </Flex>
    );
  }

  if (!products) {
    return (
      <Box textAlign="center" m="0 auto">
        <Text textStyle="title">No hay productos</Text>
        <GoHome />
      </Box>
    );
  }
  return (
    <Box>
      {products &&
        filteredProducts.map((product, index) => {
          return <ListCard product={product} index={index} key={product.id} />;
        })}
    </Box>
  );
};
export default ProductsList;
