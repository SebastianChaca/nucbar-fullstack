import { useEffect } from 'react';

import { fetchProductsTest } from '../../Redux/Actions/Products/prodcutsActions';
import { url } from '../../Utils/apiUrl';
import { SectionItems } from './Components';
import { useDispatch, useSelector } from 'react-redux';

const Section = ({ category }) => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProductsTest(`${url}/products?category=${category}`));
  }, []);

  return (
    <SectionItems.Container
      response={products}
      loading={loading}
      category={category}
    >
      <SectionItems.Title />

      <SectionItems.Grid>
        {products ? <SectionItems.Cards /> : <SectionItems.SekeletonCards />}
      </SectionItems.Grid>
      <SectionItems.SeeAllBtn />
    </SectionItems.Container>
  );
};

export default Section;
