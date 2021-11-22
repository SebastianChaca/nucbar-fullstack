import { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import HamburgerDash from './Components/HamburgerDash';
import ConfigDash from './Components/ConfigDash';
import OpacityDiv from '../Transitions/Opacity/OpacityDiv';
const DashSidebar = ({ children, url }) => {
  const [open, setOpen] = useState(false);

  const motionVariants = {
    open: {
      width: '200px',
      position: 'absolute',
    },
    close: {
      width: '100px',
      position: 'absolute',
      transition: {
        delay: 0.3,
      },
    },
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Flex position="absolute" top="80px">
        <motion.div
          variants={motionVariants}
          initial={false}
          animate={open ? 'open' : 'close'}
        >
          <Flex
            bg="nucba.form"
            p="30px"
            w="100%"
            flexDir="column"
            alignItems="left"
            h="calc(100vh - 80px)"
            position="relative"
            zIndex={100}
            boxShadow={open && '9px 0px 8px -7px rgba(0, 0, 0, 0.5)'}
          >
            <HamburgerDash open={open} handleOpen={handleOpen} />
            <ConfigDash open={open} url={url} />
          </Flex>
        </motion.div>
        <OpacityDiv open={open}>
          <Box
            w="100vw"
            h="100vh"
            bg="rgba(0, 0, 0, 0.4)"
            boxShadow="inset 0 0 5px rgba(0, 0, 0, 0.5)"
          />
        </OpacityDiv>
      </Flex>
    </>
  );
};

export default DashSidebar;
