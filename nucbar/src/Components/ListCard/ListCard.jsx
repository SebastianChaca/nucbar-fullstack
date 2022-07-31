import { useState } from 'react';

import { Box, Flex, Text, Button, LinkOverlay } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link as ReachLink } from 'react-router-dom';

import { CardItems } from './Components';

const ListCard = ({ product, index }) => {
  return (
    <CardItems.Provider product={product}>
      <CardItems.Container index={index}>
        <LinkOverlay as={ReachLink} to={`/product/${product.id}`}>
          <Flex>
            <CardItems.Image />

            <Box position="relative" ml="8%" w="80%">
              <Flex justifyContent="space-between" alignItems="start">
                <CardItems.Title />
                <CardItems.StarsRate product={product} />
              </Flex>
              <Box>
                <CardItems.Price product={product} />
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
