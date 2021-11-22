import { Flex } from '@chakra-ui/react';
const ConfigContainer = ({ children }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" p="15px">
      {children}
    </Flex>
  );
};

export default ConfigContainer;
