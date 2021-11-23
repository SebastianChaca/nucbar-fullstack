import { Flex, Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const ConfigContainer = ({ children, to }) => {
  const history = useHistory();
  return (
    <Box
      cursor="pointer"
      position="relative"
      zIndex={1000}
      onClick={() => {
        history.push(to);
      }}
    >
      <Flex justifyContent="space-between" alignItems="center" p="15px">
        {children}
      </Flex>
    </Box>
  );
};

export default ConfigContainer;
