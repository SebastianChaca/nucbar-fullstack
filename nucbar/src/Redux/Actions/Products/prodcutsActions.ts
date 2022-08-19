import { Products, Product } from '../../../Interfaces/BDInterfaces';
import { Dispatch } from 'redux';
import { ProductActionsTypes, ProductActions } from './ActionsTypes';
import axiosConfig from '../../../Axios/axiosConfig';
import { getProductsByCategory } from '../../../Services/getProducts';
export const fetchProducts = (products: Products) => ({
  type: ProductActionsTypes.GET_PRODUCTS,
  payload: products,
});

export const startProducts = () => ({
  type: ProductActionsTypes.START_PRODUCTS,
});

export const finishProducts = () => ({
  type: ProductActionsTypes.FINISH_PRODUCTS,
});

export const failProduct = (error: any) => ({
  type: ProductActionsTypes.FAIL_PRODUCTS,
  payload: error,
});

export const fetchProductsTest =
  //TODO: cambiar type
  (params: string) => async (dispatch: Dispatch<ProductActions>) => {
    dispatch({
      type: ProductActionsTypes.START_PRODUCTS,
    });
    try {
      const { data } = await getProductsByCategory(params);

      dispatch({
        type: ProductActionsTypes.GET_PRODUCTS,
        payload: data.data.products,
      });
    } catch (err) {
      dispatch(failProduct(err));
    }
  };
