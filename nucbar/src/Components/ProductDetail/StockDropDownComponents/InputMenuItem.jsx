import {
  Text,
  Box,
  Input,
  InputRightElement,
  InputGroup,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';

const InputMenuItem = ({ handleSubmit, handleClose, ref }) => {
  const [inputMode, setInputMode] = useState(false);
  const [applyValue, setApplyValue] = useState(null);
  const handleChange = e => {
    setApplyValue(e.target.value);
  };
  const submit = () => {
    handleSubmit(applyValue);
    handleClose();
  };

  if (inputMode) {
    return (
      <Box
        p="20px"
        borderLeft="2px"
        borderColor="nucba.primary"
        _hover={{ bg: 'nucba.grisTres' }}
      >
        <Text textStyle="captionRegular" color="nucba.grisDos" m="5px">
          Cantidad:
        </Text>
        <InputGroup>
          <Input
            border="1px"
            h="50px"
            onChange={e => handleChange(e)}
            type="number"
            bg="nucba.form"
            focusBorderColor="nucba.primary"
          />
          <InputRightElement m="5px" w="55px" value={applyValue}>
            <Button
              h="25px"
              type="submit"
              isDisabled={!applyValue}
              bg={applyValue ? 'nucba.primary' : 'nucba.grisTres'}
              color={applyValue && 'nucba.form'}
              onClick={() => submit()}
              _hover={{ bg: 'nucba.hover' }}
            >
              <Text
                fontSize="10px"
                color={applyValue ? 'nucba.form' : 'nucba.grisUno'}
                m="10px"
              >
                Aplicar
              </Text>
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    );
  }
  return (
    <Button
      onClick={() => setInputMode(true)}
      p={0}
      borderRadius="0px"
      bg="none"
    >
      <Text textStyle="regular" w="100%" h="40px" p="10px">
        Mas de 6 unidades
      </Text>
    </Button>
  );
};

export default InputMenuItem;