import { Products } from '../../../Interfaces/BDInterfaces';

import { ProductActionsTypes } from './ActionsTypes';

export const fetchProducts = (products: Products) => ({
  type: ProductActionsTypes.GET_PRODUCTS,
  payload: products,
});
