import { Button } from '@chakra-ui/button';
import { useHistory } from 'react-router';
import useDropdownContext from './Provider/useDropdownContext';
import { MenuItemProps } from './interfaces';

const MenuItem = ({ children, onClick, bg, to }: MenuItemProps) => {
  const { handleOpen } = useDropdownContext();
  const history = useHistory();
  const handleClick = () => {
    handleOpen();
    onClick && onClick();
  };
  return (
    <Button    
      onClick={()=> to ? history.push(to) : handleClick}
      p={0}
      bg={bg}
      borderRadius="0px"
    >
      {children}
    </Button>
  );
};

export default MenuItem;
