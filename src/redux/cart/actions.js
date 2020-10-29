import { TOGGLE_CART, ADD_TO_CART } from './styles';

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
