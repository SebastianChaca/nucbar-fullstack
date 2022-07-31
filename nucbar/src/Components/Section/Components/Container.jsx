import { Flex } from '@chakra-ui/react';
import React from 'react';
import Provider from './Context/Provider';
const Container = ({ children, response }) => {
  return (
    <Provider response={response}>
      <Flex alignContent="center" mx="30px" my="30px" flexDir="column">
        {children}
      </Flex>
    </Provider>
  );
};

export default Container;
