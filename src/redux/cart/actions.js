import {
  TOGGLE_CART,
  ADD_TO_CART,
  CHANGE_QUANTITY,
  REMOVE_ITEM_CART,
} from './styles';

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

export const removeItemCart = (item) => ({
  type: REMOVE_ITEM_CART,
  payload: item,
});
