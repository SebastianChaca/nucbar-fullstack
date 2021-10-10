import React, { useState } from 'react';
import InputCustom from '../Shared/Input';
import useForm from '../../Hooks/useForm';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_PASSWORD,
} from '../../Utils/validator';
import { url } from '../../Utils/apiUrl';
import { LoginForm, RegisterForm } from '../../Utils/initialForms';
import { Box, Button } from '@chakra-ui/react';
import FormContainer from './FormContainer';
import { LinkText } from './LinkText';
import useFetch from '../../Hooks/useFetch';

import { setCurrentUser } from '../../Redux/Actions/userActions';

const Login = () => {
  const [loginMode, setLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(LoginForm, false);
  const {
    inputs: { email, password, name },
  } = formState;

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { response, error, loading, fetchData } = useFetch();

  const handleFormMode = () => {
    if (loginMode) {
      setFormData(RegisterForm(formState.inputs), false);
    } else {
      setFormData(LoginForm, email?.isValid && password?.isValid);
    }
    setLoginMode(!loginMode);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (loginMode) {
      fetchData('post', `${url}/auth/local`, setCurrentUser, {
        identifier: email.value,
        password: password.value,
      });
    } else {
      fetchData('post', `${url}/auth/local/register`, setCurrentUser, {
        username: name.value,
        email: email.value,
        password: password.value,
      });
    }
  };
  return (
    <>
      {!response && error && (
        <Box textAlign="center" mt="20px" mb="20px" color="red">
          Se produjo un errro, intentalo de nuevo.
        </Box>
      )}
      <FormContainer>
        {!loginMode && (
          <InputCustom
            type="text"
            id="name"
            label="Nombre"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(10)]}
          />
        )}
        <InputCustom
          type="text"
          id="email"
          label="E-mail"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL(email.value)]}
          showPassword={showPassword}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        <InputCustom
          type={showPassword ? 'text' : 'password'}
          id="password"
          label="Password"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(5), VALIDATOR_MAXLENGTH(10)]}
          handlePasswordVisibility={handlePasswordVisibility}
          showPassword={showPassword}
        />
        {!loginMode && (
          <InputCustom
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            label="Confirma la password"
            onInput={inputHandler}
            validators={[VALIDATOR_PASSWORD(password.value)]}
            handlePasswordVisibility={handlePasswordVisibility}
            showPassword={showPassword}
          />
        )}
        <Button
          bg="nucba.primary"
          mt="25px"
          isFullWidth
          color="#ffff"
          disabled={!formState.isValid}
          onClick={handleSubmit}
          isLoading={loading}
          _hover={{ bg: 'nucba.hover' }}
        >
          Iniciar sesión
        </Button>
      </FormContainer>
      <LinkText loginMode={loginMode} handleMode={handleFormMode} />
    </>
  );
};
export default Login;
