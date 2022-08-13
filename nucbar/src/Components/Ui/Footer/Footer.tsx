import { Flex, Image } from '@chakra-ui/react';
import Logo from '../../../Assets/logo1.png';
const Footer = () => {
  return (
    <Flex
      // as="footer"
      w="100%"
      p="30px"
      justifyContent="center"
      alignItems="center"
      bg="nucba.hover"
      marginTop="50px"
    >
      <Image src={Logo} objectFit="contain" boxSize="80px" />
    </Flex>
  );
};

export default Footer;
