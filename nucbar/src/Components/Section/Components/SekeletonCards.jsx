import React from 'react';
import { Card } from '../../Card/Card';
import useSectionContext from './Context/useSectionContext';
const SekeletonCards = () => {
  const { loading } = useSectionContext();
  const skeletonCards = [1, 2, 3, 4, 5];
  return skeletonCards.map((c, index) => {
    return <Card loading={loading} index={index} key={index} />;
  });
};

export default SekeletonCards;
