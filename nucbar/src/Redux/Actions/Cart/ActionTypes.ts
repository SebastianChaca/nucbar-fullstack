import { Product } from '../../../Interfaces/BDInterfaces';

export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM',
  CLEAR_CART = 'CLEAR_CART',
  GET_TOTALS = 'GET_TOTALS',
  SET_ITEM = 'SET_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

interface addItem {
  type: CartActionTypes.ADD_ITEM;
  payload: Product;
}

interface setItems {
  type: CartActionTypes.SET_ITEM;
  payload: { item: Product; quantity: number };
}

interface removeItem {
  type: CartActionTypes.REMOVE_ITEM;
  payload: Product;
}

interface clearCart {
  type: CartActionTypes.CLEAR_CART;
}

interface getTotals {
  type: CartActionTypes.GET_TOTALS;
}

export type CartActions =
  | addItem
  | setItems
  | removeItem
  | clearCart
  | getTotals;
