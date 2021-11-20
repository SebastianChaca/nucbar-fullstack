import { Button } from '@chakra-ui/react';
const MenuButton = ({ onClick, children }) => {
  return (
    <Button
      bg="none"
      _hover={{ bg: 'none' }}
      _focus={{ outline: 'none' }}
      p={0}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
};

export default MenuButton;
