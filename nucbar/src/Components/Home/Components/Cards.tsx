import React, { useState } from 'react';
import { Card } from '../../Card/Card';
import useSectionContext from './Context/useSectionContext';
const Cards = () => {
  const [showBtn, setShowBtn] = useState(false);
  const { response, loading } = useSectionContext();
  if (!response) {
    return null;
  }
  console.log(response);
  return (
    <>
      {response?.slice(0, 5).map((product, index) => {
        return (
          <Card
            key={product.id}
            loading={loading}
            // index={index}
            // showBtn={showBtn}
            // setShowBtn={setShowBtn}
            product={product}
            // lastElement={lastSarasa}
          />
        );
      })}
    </>
  );
};

export default Cards;
