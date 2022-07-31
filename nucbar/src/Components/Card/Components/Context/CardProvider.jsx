import React, { createContext } from 'react';
export const CardContext = createContext({});
const CardProvider = ({ children, product }) => {
  const { Provider } = CardContext;
  return <Provider value={{ product }}>{children}</Provider>;
};

export default CardProvider;
