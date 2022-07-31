import { Button } from '@chakra-ui/button';
import { useHistory } from 'react-router';
import { DropDownContext } from './DropdownProvider';
import { useContext } from 'react';
const MenuItem = ({ children, onClick, bg, to }) => {
  const { handleOpen } = useContext(DropDownContext);
  const history = useHistory();
  const handleClick = () => {
    handleOpen();
    onClick && onClick();
  };
  return (
    <Button
      onClick={() => (onClick ? handleClick() : to ? history.push(to) : null)}
      p={0}
      bg={bg}
      borderRadius="0px"
    >
      {children}
    </Button>
  );
};

export default MenuItem;
