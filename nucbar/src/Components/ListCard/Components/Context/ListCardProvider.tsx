import React, { useState, createContext } from 'react';
import { ListCardContextProps, Props } from './interfaces';
export const ListCardContext = createContext({} as ListCardContextProps);


const ListCardProvider = ({ product, children }: Props) => {
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
