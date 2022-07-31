import { useEffect } from 'react';

import useFetch from '../../Hooks/useFetch';
import { url } from '../../Utils/apiUrl';
import { SectionItems, SectionSekeleton, SeeAllBtn } from './Components';
const Section = ({ category }) => {
  const { loading, fetchData, response } = useFetch();
  // const lastSarasa = sarasa[sarasa.length - 1] - 1;

  useEffect(() => {
    fetchData('get', `${url}/products?category=${category}`);
  }, []);

  return (
    <SectionItems.Container
      response={response}
      loading={loading}
      category={category}
    >
      <SectionItems.Sekeleton />

      <SectionItems.Grid>
        {response ? <SectionItems.Cards /> : <SectionItems.SekeletonCards />}
      </SectionItems.Grid>
      <SectionItems.SeeAllBtn />
    </SectionItems.Container>
  );
};

export default Section;
