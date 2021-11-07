import React, { useEffect } from 'react';
import { url } from '../../Utils/apiUrl';
import useFetch from '../../Hooks/useFetch';
import { fetchProducts } from '../../Redux/Actions/prodcutsActions';
import Section from '../../Components/Section/Section';
import { useSelector } from 'react-redux';
import { MemoGallery } from '../../Components/Ui/Gallery/Gallery';
import { filterProductsByCategory } from '../../Utils/filterProductsByCaterogy';

export const Home = () => {
  const { loading, fetchData } = useFetch();
  const { products } = useSelector(state => state.products);

  useEffect(() => {
    fetchData('get', `${url}/products`, fetchProducts);
  }, [fetchData]);

  //TODO: implementar secciones en la api
  const categories = ['Whiskys', 'Habanos y puros', 'Pipas'];

  return (
    <>
      <MemoGallery />
      {products ? (
        categories.map(cat => (
          <Section
            section={cat}
            products={filterProductsByCategory(products?.data?.products, cat)}
          />
        ))
      ) : (
        <Section loading={loading} />
      )}
    </>
  );
};
export default Home;
