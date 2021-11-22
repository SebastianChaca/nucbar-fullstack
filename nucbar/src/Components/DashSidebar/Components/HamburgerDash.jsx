import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import OpacityDiv from '../../Transitions/Opacity/OpacityDiv';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
const HamburgerDash = ({ open, handleOpen }) => {
  const buttonVariants = {
    open: { rotate: 180 },
    close: { rotate: 0 },
  };
  return (
    <Flex alignItems="start">
      <Box
        fontSize="20px"
        w="20px"
        h="20px"
        mt="2px"
        mb="50px"
        cursor="pointer"
        color="nucba.primary"
        onClick={() => handleOpen()}
      >
        <motion.div variants={buttonVariants} animate={open ? 'open' : 'close'}>
          {open ? <GrClose /> : <GiHamburgerMenu />}
        </motion.div>
      </Box>
      <OpacityDiv open={open}>
        <Text textStyle="subtitle" color="black" ml="10px">
          Mi Cuenta
        </Text>
      </OpacityDiv>
    </Flex>
  );
};

export default HamburgerDash;
