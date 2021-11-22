import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import RectangularCard from '../RectangularCard/RectangularCard';
import { useSelector } from 'react-redux';
import { ChevronRightIcon } from '@chakra-ui/icons';
import ConfigContainer from './ConfigContainer';
const UserData = () => {
  const user = useSelector(state => state.user);
  return (
    <Flex flexDir="column" alignItems="left" m="auto" w="70%" p="50px">
      <Text textStyle="title" mb="20px">
        Mis Datos
      </Text>
      <RectangularCard w="700px" alignItems="center">
        <ConfigContainer>
          <Text textStyle="regular">Usuario</Text>
          <Text textStyle="regular" color="nucba.grisMeli">
            {user?.currentUser?.name}
          </Text>
          <ChevronRightIcon color="nucba.primary" fontSize="22px" />
        </ConfigContainer>
        <hr />
        <ConfigContainer>
          <Text textStyle="regular">E-mail</Text>
          <Text textStyle="regular" color="nucba.grisMeli">
            {user?.currentUser?.email}
          </Text>
          <ChevronRightIcon color="nucba.primary" fontSize="22px" />
        </ConfigContainer>
      </RectangularCard>
    </Flex>
  );
};

export default UserData;
