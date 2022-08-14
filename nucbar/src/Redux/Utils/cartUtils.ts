import { Product, Products } from '../../Interfaces/BDInterfaces';

export const addItemToCart = (
  cartItems: Products | undefined,
  itemToAdd: number
) => {
  const existingCartItem = cartItems?.find(
    cartItem => cartItem.id === itemToAdd
  );

  if (existingCartItem) {
    return cartItems?.map(cartItem => {
      return cartItem.id === itemToAdd
        ? {
            ...cartItem,
            quantity: cartItem.quantity ? cartItem.quantity + 1 : 1,
          }
        : cartItem;
    });
  }

  return cartItems;
};
export const setItemToCart = (
  cartItems: Products,
  itemToAdd: number,
  quantity: number
) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToAdd
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === itemToAdd
        ? { ...cartItem, quantity: quantity }
        : cartItem;
    });
  }

  return cartItems;
};

export const removeItemFromCart = (
  cartItems: Products,
  itemToRemove: number
) => {
  const existingCartItem = cartItems?.find(
    cartItem => cartItem.id === itemToRemove
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove);
  }

  return cartItems.map(cartItem => {
    return cartItem.id === itemToRemove
      ? { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity - 1 : 0 }
      : cartItem;
  });
};

export const getTotals = (cartItems: Products) => {
  let { total, quantity } = cartItems.reduce(
    (cartTotal, cartItem) => {
      const { price, quantity } = cartItem;
      if (quantity && quantity >= 0) {
        const itemTotal = price * quantity;
        cartTotal.total += itemTotal;
        cartTotal.quantity += quantity;
      }
      return cartTotal;
    },
    {
      total: 0,
      quantity: 0,
    }
  );
  total = parseFloat(total.toFixed(2));
  return { total, quantity };
};
