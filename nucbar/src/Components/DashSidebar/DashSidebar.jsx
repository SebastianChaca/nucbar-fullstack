import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import HamburgerDash from './Components/HamburgerDash';
import ConfigDash from './Components/ConfigDash';
import Backdrop from './Components/Backdrop';
import DashContainer from './Components/DashContainer';
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
          <DashContainer open={open}>
            <HamburgerDash open={open} handleOpen={handleOpen} />
            <ConfigDash open={open} url={url} />
          </DashContainer>
        </motion.div>
        <Backdrop open={open} onClick={setOpen} />
      </Flex>
    </>
  );
};

export default DashSidebar;
