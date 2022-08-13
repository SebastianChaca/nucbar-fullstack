import React from 'react';
import Section from '../../Components/Home/Section';
import { MemoGallery } from '../../Components/Ui/Gallery/Gallery';

export const Home = () => {
  //esto tiene que venir dle backoffice
  const categorias = ['whiskys', 'habanos y puros', 'pipas'];
  return (
    <>
      <MemoGallery />
      {categorias &&
        categorias.map(categoria => {
          return <Section category={categoria} key={categoria} />;
        })}
    </>
  );
};
export default Home;
