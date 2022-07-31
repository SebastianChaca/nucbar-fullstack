import { Flex } from '@chakra-ui/react';
import React from 'react';
import Provider from './Context/Provider';
const Container = ({ children, response, loading, category }) => {
  return (
    <Provider response={response} loading={loading} category={category}>
      <Flex alignContent="center" mx="30px" my="30px" flexDir="column">
        {children}
      </Flex>
    </Provider>
  );
};

export default Container;
