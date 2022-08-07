import { Products } from '../../../Interfaces/BDInterfaces';

export enum ProductActionsTypes {
  GET_PRODUCTS = 'GET_PRODUCTS',
}

interface FetchProduct {
  type: ProductActionsTypes.GET_PRODUCTS;
  payload: Products;
}
export type ProductActions = FetchProduct;
