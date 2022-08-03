import { Product } from '../../../../Interfaces/BDInterfaces';

export interface ListCardContextProps {
  product: Product;
  show: boolean;
  setShowEnter(): void;
  setShowLeave(): void;
}

export interface Props {
  product: Product;
  children: JSX.Element;
}
