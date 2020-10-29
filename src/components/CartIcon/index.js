import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './styles.scss';
import { toggleCart } from '../../redux/cart/actions';

const CartIcon = ({ toggleCart, cartItems }) => {
  let countCart = 0;
  if (cartItems.length > 0) {
    cartItems.forEach((item) => {
      countCart += item.quantity;
    });
  }

  return (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{countCart}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
