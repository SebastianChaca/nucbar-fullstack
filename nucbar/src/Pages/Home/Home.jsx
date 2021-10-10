import React, { useEffect } from 'react';
import { url } from '../../Utils/apiUrl';
import useFetch from '../../Hooks/useFetch';
import { fetchProducts } from '../../Redux/Actions/prodcutsActions';
import { getSections } from '../../Redux/Actions/sectionsActions.js';
import Section from '../../Components/Section/Section';
import { useSelector } from 'react-redux';
import { MemoGallery } from '../../Components/Ui/Gallery/Gallery';
import { filterProductsByCategory } from '../../Utils/filterProductsByCaterogy';
import ListCard from '../../Components/ListCard/ListCard';
import OrderByDropDown from '../../Components/OrderByDropDown/OrderByDropDown';
export const Home = () => {
  const { loading, fetchData } = useFetch();
  const { products } = useSelector(state => state.products);
  const { sections } = useSelector(state => state.sections);
  useEffect(() => {
    fetchData('get', `${url}/products`, fetchProducts);
    fetchData('get', `${url}/sections`, getSections);
  }, [fetchData]);

  return (
    <>
      <MemoGallery />
      {sections && products ? (
        sections.map(section => (
          <Section
            section={section}
            products={filterProductsByCategory(products, section.categoria)}
          />
        ))
      ) : (
        <Section loading={loading} />
      )}
    </>
  );
};
export default Home;
