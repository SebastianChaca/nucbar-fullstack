import { Box, Flex, LinkOverlay } from '@chakra-ui/react';

import { Link as ReachLink } from 'react-router-dom';

import { CardItems } from './Components';
import {Props} from './Components/interfaces'
const ListCard = ({ product, index }: Props) => {
  return (
    <CardItems.Provider product={product}>
      <CardItems.Container index={index}>
        <LinkOverlay as={ReachLink} to={`/product/${product.id}`}>
          <Flex>
            <CardItems.Image />

            <Box position="relative" ml="8%" w="80%">
              <Flex justifyContent="space-between" alignItems="start">
                <CardItems.Title />
                <CardItems.StarsRate />
              </Flex>
              <Box>
                <CardItems.Price />
                <CardItems.Description />
                <CardItems.FreeShipping />
              </Box>
            </Box>
          </Flex>
        </LinkOverlay>
        <CardItems.LikeButton />
      </CardItems.Container>
    </CardItems.Provider>
  );
};

export default ListCard;
