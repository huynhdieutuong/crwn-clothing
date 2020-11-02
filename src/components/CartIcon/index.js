import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './styles.scss';
import { toggleCart } from '../../redux/cart/actions';
import { selectCartItemsCount } from '../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
