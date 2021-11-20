import { Button } from '@chakra-ui/button';

const MenuItem = ({ children, onClick, bg }) => {
  return (
    <Button onClick={() => onClick()} p={0} bg={bg} borderRadius="0px">
      {children}
    </Button>
  );
};

export default MenuItem;
