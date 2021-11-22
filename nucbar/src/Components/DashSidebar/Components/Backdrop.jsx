import React from 'react';
import { Box } from '@chakra-ui/react';
import OpacityDiv from '../../Transitions/Opacity/OpacityDiv';
const Backdrop = ({ open, onClick }) => {
  return (
    <OpacityDiv open={open}>
      <Box
        w="100vw"
        h="100vh"
        bg="rgba(0, 0, 0, 0.4)"
        boxShadow="inset 0 0 5px rgba(0, 0, 0, 0.5)"
        onClick={() => onClick(false)}
      />
    </OpacityDiv>
  );
};

export default Backdrop;
