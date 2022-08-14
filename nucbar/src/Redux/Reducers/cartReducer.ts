import { CartActionTypes, CartActions } from '../Actions/Cart/ActionTypes';
import { Product } from '../../Interfaces/BDInterfaces';
import {
  addItemToCart,
  removeItemFromCart,
  getTotals,
  setItemToCart,
} from '../Utils/cartUtils';

interface State {
  cartItems: [] | Product[];
}
const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state: State = INITIAL_STATE, action: CartActions) => {
  switch (action.type) {
    case CartActionTypes.SET_ITEM:
      return {
        ...state,
        cartItems: setItemToCart(
          state.cartItems,
          action.payload.item,
          action.payload.quantity
        ),
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CartActionTypes.GET_TOTALS:
      return {
        ...state,
        totals: getTotals(state.cartItems),
      };
    default:
      return state;
  }
};

export default cartReducer;
