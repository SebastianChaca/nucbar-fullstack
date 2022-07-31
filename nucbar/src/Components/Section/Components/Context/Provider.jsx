import React, { createContext } from 'react';
export const SectionContext = createContext({});
const Provider = ({ children, response, loading, category }) => {
  const { Provider } = SectionContext;
  return (
    <Provider value={{ response, loading, category }}>{children}</Provider>
  );
};

export default Provider;
