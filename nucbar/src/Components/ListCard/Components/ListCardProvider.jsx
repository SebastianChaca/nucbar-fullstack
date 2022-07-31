import React, { useState, createContext } from 'react';

export const ListCardContext = createContext({});
const ListCardProvider = ({ product, children }) => {
  const [show, setShow] = useState(false);
  const setShowEnter = () => {
    setShow(true);
  };
  const setShowLeave = () => {
    setShow(false);
  };
  const { Provider } = ListCardContext;
  return (
    <Provider value={{ product, show, setShowEnter, setShowLeave }}>
      {children}
    </Provider>
  );
};

export default ListCardProvider;
