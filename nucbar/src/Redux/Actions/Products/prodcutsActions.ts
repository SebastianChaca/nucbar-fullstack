import { Products } from '../../../Interfaces/BDInterfaces';

import { ProductActionsTypes } from './ActionsTypes';

export const fetchProducts = (products: Products) => ({
  type: ProductActionsTypes.GET_PRODUCTS,
  payload: products,
});

export const startProducts = () => {
  type: ProductActionsTypes.START_PRODUCTS;
};

export const finishProducts = () => {
  type: ProductActionsTypes.FINISH_PRODUCTS;
};

export const failProduct = (error: string) => ({
  type: ProductActionsTypes.FAIL_PRODUCTS,
  payload: error,
});
