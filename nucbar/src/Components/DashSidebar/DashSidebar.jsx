import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import HamburgerDash from './Components/HamburgerDash';
import ConfigDash from './Components/ConfigDash';
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
    <Flex>
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
        >
          <HamburgerDash open={open} handleOpen={handleOpen} />
          <ConfigDash open={open} url={url} />
        </Flex>
      </motion.div>

      {children}
    </Flex>
  );
};

export default DashSidebar;
