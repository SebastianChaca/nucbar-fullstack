import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
  GET_TOTALS,
} from '../Actions/cartActions';

import {
  addItemToCart,
  removeItemFromCart,
  getTotals,
} from '../Utils/cartUtils';

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case GET_TOTALS:
      return {
        ...state,
        total: getTotals(state.cartItems),
      };
    default:
      return state;
  }
};

export default cartReducer;
