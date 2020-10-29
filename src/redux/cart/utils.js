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
