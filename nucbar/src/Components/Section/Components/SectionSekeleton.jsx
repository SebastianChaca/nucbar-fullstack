import React from 'react';
import { Skeleton, Text } from '@chakra-ui/react';
import useSectionContext from './Context/useSectionContext';
const SectionSekeleton = () => {
  const { loading, category } = useSectionContext();
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

export default SectionSekeleton;
