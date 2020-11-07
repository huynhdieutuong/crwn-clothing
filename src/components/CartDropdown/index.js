import React, { useEffect, useRef } from 'react';
import './styles.scss';
import CustomButton from '../CustomButton/index';
import CartItem from '../CartItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/selectors';
import { withRouter } from 'react-router-dom';
import { toggleCart } from '../../redux/cart/actions';

const CartDropdown = ({ cartItems, history, toggleCart }) => {
  const wrapperRef = useRef(null);

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      toggleCart();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton
        onClick={() => {
          toggleCart();
          history.push('/checkout');
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CartDropdown));
