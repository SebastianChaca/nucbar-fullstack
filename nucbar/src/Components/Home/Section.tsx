import { useEffect, useState } from 'react';
import { SectionItems } from './Components';
import { Products } from '../../Interfaces/BDInterfaces';
import { getProductsByCategory } from '../../Services/getProducts';
interface Props {
  category: string;
}
const Section = ({ category }: Props) => {
  const [response, setresponse] = useState<Products | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | boolean>(null);
  useEffect(() => {
    const params = {
      category,
    };
    setLoading(true);
    getProductsByCategory(params)
      .then(res => setresponse(res.products))
      .catch(() => {
        setresponse(null);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return <h1>Error</h1>;
  }
  console.log(response);
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
