import React, { createContext } from 'react';
import { Product } from '../../../../Interfaces/BDInterfaces';
interface CardProvider {
  product: Product | null;
}
interface Props {
  children: JSX.Element | JSX.Element[];
  product: Product | null;
}
export const CardContext = createContext({} as CardProvider);

const CardProvider = ({ children, product }: Props) => {
  const { Provider } = CardContext;
  return <Provider value={{ product }}>{children}</Provider>;
};

export default CardProvider;
