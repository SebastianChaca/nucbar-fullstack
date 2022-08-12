import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Products } from '../../../Interfaces/BDInterfaces';
import Provider from './Context/Provider';
interface Props{
  children: JSX.Element | JSX.Element[]
  response: Products | null
  loading:boolean
  category:string
}
const Container = ({ children, response, loading, category }: Props) => {
  return (
    <Provider response={response} loading={loading} category={category}>
      <Flex alignContent="center" mx="30px" my="30px" flexDir="column">
        {children}
      </Flex>
    </Provider>
  );
};

export default Container;
