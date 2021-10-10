export const LoginForm = {
  password: {
    value: '',
    validate: { isValid: false },
  },

  email: { value: '', validate: { isValid: false } },
};
export const RegisterForm = inputs => {
  return {
    ...inputs,
    confirmPassword: {
      value: '',
      validate: { isValid: false },
    },

    name: { value: '', validate: { isValid: false } },
  };
};
