import React from 'react';
import OpacityDiv from '../../Transitions/Opacity/OpacityDiv';
import { Flex, Box, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { BsGear } from 'react-icons/bs';
const ConfigDash = ({ open, url }) => {
  const { pathname } = useLocation();

  return (
    <Link to={`${url}/configuration`}>
      <Box fontSize="20px">
        <Flex>
          <Box color={pathname === `${url}/configuration` && 'nucba.third'}>
            <BsGear />
          </Box>

          <OpacityDiv open={open}>
            <Text textStyle="regular" ml="10px">
              Configuración
            </Text>
          </OpacityDiv>
        </Flex>
      </Box>
    </Link>
  );
};

export default ConfigDash;
