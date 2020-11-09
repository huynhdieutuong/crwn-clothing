import {
  TOGGLE_CART,
  ADD_TO_CART,
  CHANGE_QUANTITY,
  REMOVE_ITEM_CART,
} from './styles';
import { addItemToCart, changeQuantity } from './utils';

const initialState = {
  hiddenCart: true,
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CART:
      return {
        ...state,
        hiddenCart: !state.hiddenCart,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case CHANGE_QUANTITY:
      return {
        ...state,
        cartItems: changeQuantity(state.cartItems, payload),
      };
    case REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
