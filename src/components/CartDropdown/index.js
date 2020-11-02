import React from 'react';
import './styles.scss';
import CustomButton from '../CustomButton/index';
import CartItem from '../CartItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/selectors';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
