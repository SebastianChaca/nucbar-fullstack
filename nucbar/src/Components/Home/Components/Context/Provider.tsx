import React, { createContext } from 'react';
import { Products } from '../../../../Interfaces/BDInterfaces';
interface ContextProps{
  response: Products | null
  loading:boolean
  category:string
}

interface Props{
  children: JSX.Element | JSX.Element[]
  response: Products | null
  loading:boolean
  category:string
}
export const SectionContext = createContext({}as ContextProps);
const Provider = ({ children, response, loading, category }: Props) => {
  const { Provider } = SectionContext;
  return (
    <Provider value={{ response, loading, category }}>{children}</Provider>
  );
};

export default Provider;
