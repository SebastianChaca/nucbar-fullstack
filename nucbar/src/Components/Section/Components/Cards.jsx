import React, { useState } from 'react';
import { Card } from '../../Card/Card';
import useSectionContext from './Context/useSectionContext';
const Cards = () => {
  const [showBtn, setShowBtn] = useState(false);
  const { response } = useSectionContext();
  return response.data.products.slice(0, 5).map((product, index) => {
    return (
      <Card
        key={product.id}
        index={index}
        showBtn={showBtn}
        setShowBtn={setShowBtn}
        product={product}
        // lastElement={lastSarasa}
      />
    );
  });
};

export default Cards;
