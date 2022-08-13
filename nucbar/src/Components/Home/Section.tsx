import { useEffect, useState } from 'react';
import { SectionItems } from './Components';
import axiosConfig from '../../Axios/axiosConfig';
import { Products } from '../../Interfaces/BDInterfaces';
import useBaseUrlFetch from '../../Hooks/useBaseUrlFetch';
interface Props {
  category: string;
}
const Section = ({ category }: Props) => {
  const { getData, loading, response, error } = useBaseUrlFetch();
  useEffect(() => {
    const params = {
      category,
    };
    getData(params);
  }, []);

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <SectionItems.Container
        response={response}
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
