import { TOGGLE_CART, ADD_TO_CART } from './styles';
import { addItemToCart } from './utils';

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
    default:
      return state;
  }
};

export default reducer;
