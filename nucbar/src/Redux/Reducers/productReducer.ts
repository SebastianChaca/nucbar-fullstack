import { Products } from '../../Interfaces/BDInterfaces';
import {
  ProductActionsTypes,
  ProductActions,
} from '../Actions/Products/ActionsTypes';
export interface ProductState {
  products: Products | null;
  loading: boolean;
  error: string | null;
}
const INITIAL_STATE = {
  products: null,
  loading: false,
  error: null,
};

const productReducer = (
  state: ProductState = INITIAL_STATE,
  action: ProductActions
) => {
  switch (action.type) {
    case ProductActionsTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case ProductActionsTypes.START_PRODUCTS:
      return { ...state, loading: true };
    case ProductActionsTypes.FINISH_PRODUCTS:
      return { ...state, loading: false };
    case ProductActionsTypes.FAIL_PRODUCTS:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
