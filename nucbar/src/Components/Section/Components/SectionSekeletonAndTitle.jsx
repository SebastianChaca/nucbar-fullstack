import React from 'react';
import { Skeleton, Text } from '@chakra-ui/react';
import useSectionContext from './Context/useSectionContext';
const SectionSekeletonAndTitle = () => {
  const { loading, category } = useSectionContext();
  //TODO:pasar a mayuscula la primera letra
  return (
    <Skeleton
      h="40px"
      w="130px"
      mb="15px"
      startColor="pink.500"
      endColor="orange.500"
      isLoaded={!loading}
    >
      <Text mb="20px" w="350px" textStyle="pagetitle">
        {category?.replace('%20', ' ').replace('%20', ' ')}
      </Text>
    </Skeleton>
  );
};

export default SectionSekeletonAndTitle;
