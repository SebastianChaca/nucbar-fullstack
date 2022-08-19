import { CartActionTypes } from './ActionTypes';
import { Product } from '../../../Interfaces/BDInterfaces';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: number) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
export const setItems = (item: number, quantity: number) => ({
  type: CartActionTypes.SET_ITEM,
  payload: { item, quantity },
});

export const removeItem = (item: Product) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
export const getTotals = () => ({
  type: CartActionTypes.GET_TOTALS,
});
