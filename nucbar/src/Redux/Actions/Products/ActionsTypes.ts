import { Products } from '../../../Interfaces/BDInterfaces';

export enum ProductActionsTypes {
  START_PRODUCTS = 'START_PRODUCTS',
  GET_PRODUCTS = 'GET_PRODUCTS',
  FINISH_PRODUCTS = 'FINISH_PRODUCTS',
  FAIL_PRODUCTS = 'FAIL_PRODUCTS',
}
interface StartProducts {
  type: ProductActionsTypes.START_PRODUCTS;
}

interface FetchProducts {
  type: ProductActionsTypes.GET_PRODUCTS;
  payload: Products;
}

interface FinishProducts {
  type: ProductActionsTypes.FINISH_PRODUCTS;
}

interface FailProduct {
  type: ProductActionsTypes.FAIL_PRODUCTS;
  payload: string;
}
export type ProductActions =
  | StartProducts
  | FetchProducts
  | FinishProducts
  | FailProduct;
