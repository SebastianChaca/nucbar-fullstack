import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useSectionContext from './Context/useSectionContext';
const SeeAllBtn = () => {
  const { loading, category } = useSectionContext();

  return (
    <>
      {!loading && (
        <Box m="auto">
          <Link
            to={{
              pathname: `products`,
              search: `category=${category}&page=1&limit=4`,
            }}
          >
            <Button
              color="nucba.form"
              bg="nucba.primary"
              _focus={{ outline: 'none' }}
              _hover={{ bg: 'nucba.hover' }}
              mt="20px"
              boxShadow="lg"
            >
              Ver Todos
            </Button>
          </Link>
        </Box>
      )}
    </>
  );
};

export default SeeAllBtn;
