import { useEffect } from 'react';

import { fetchProductsTest } from '../../Redux/Actions/Products/prodcutsActions';
import { url } from '../../Utils/apiUrl';
import { SectionItems } from './Components';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../Hooks/useTypedSelector';

interface Props {
  category: string;
}
const Section = ({ category }: Props) => {
  const dispatch = useDispatch();
  const { products, loading } = useTypedSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProductsTest(`${url}/products?category=${category}`));
  }, []);

  return (
    <>
      <SectionItems.Container
        response={products}
        loading={loading}
        category={category}
      >
        <SectionItems.Title />
        <SectionItems.Grid>
          {loading ? <SectionItems.SekeletonCards /> : <SectionItems.Cards />}
        </SectionItems.Grid>
        <SectionItems.SeeAllBtn />
      </SectionItems.Container>
    </>
  );
};

export default Section;
