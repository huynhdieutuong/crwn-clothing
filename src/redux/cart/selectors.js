import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectHiddenCart = createSelector(
  [selectCart],
  (cart) => cart.hiddenCart
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, item) => accumulatedQuantity + item.quantity,
      0
    )
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedTotal, item) => accumulatedTotal + item.quantity * item.price,
      0
    )
);
