export const addItemToCart = (stateCartItems, itemAdd) => {
  let cartItems = [...stateCartItems];
  const index = cartItems.findIndex((item) => item.id === itemAdd.id);

  if (index !== -1) {
    cartItems[index].quantity++;
  } else {
    cartItems = [...cartItems, { ...itemAdd, quantity: 1 }];
  }

  return cartItems;
};

export const changeQuantity = (stateCartItems, payload) => {
  let cartItems = [...stateCartItems];
  const index = cartItems.findIndex((item) => item.id === payload.item.id);

  if (payload.formula === 'increase') {
    cartItems[index].quantity++;
  }

  if (payload.formula === 'decrease') {
    if (payload.item.quantity > 1) {
      cartItems[index].quantity--;
    }
  }

  return cartItems;
};
