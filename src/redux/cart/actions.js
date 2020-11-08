import { TOGGLE_CART, ADD_TO_CART, CHANGE_QUANTITY } from './styles';

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const changeQuantity = (item, formula) => ({
  type: CHANGE_QUANTITY,
  payload: { item, formula },
});
