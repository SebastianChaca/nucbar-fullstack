import React from 'react';
import { Grid as GridSection } from '@chakra-ui/react';
const Grid = ({ children }) => {
  return (
    <GridSection
      templateColumns={{
        base: 'repeat(1, 250px)',
        sm: 'repeat(5, 250px)',
        md: 'repeat(5, 250px)',
        lg: 'repeat(5, 250px)',
        xl: 'repeat(5, 250px)',
      }}
      justifyContent="center"
    >
      {children}
    </GridSection>
  );
};

export default Grid;
