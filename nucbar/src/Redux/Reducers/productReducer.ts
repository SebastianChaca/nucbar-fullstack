import { Products } from '../../Interfaces/BDInterfaces';
import {
  ProductActionsTypes,
  ProductActions,
} from '../Actions/Products/ActionsTypes';
interface State {
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
  state: State = INITIAL_STATE,
  action: ProductActions
) => {
  switch (action.type) {
    case ProductActionsTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
