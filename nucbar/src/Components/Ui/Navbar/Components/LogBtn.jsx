import { Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const LogBtn = ({ display }) => {
  const { token } = useSelector(state => state.user);

  return (
    <Link to="/login">
      <Button
        color="nucba.form"
        pb="4px"
        display={display}
        variant="link"
        mr="15px"
        mt="2px"
        _focus={{ outline: 'none' }}
      >
        <Text>{token ? 'Cerrar sesión' : 'Ingresá'}</Text>
      </Button>
    </Link>
  );
};

export default LogBtn;
