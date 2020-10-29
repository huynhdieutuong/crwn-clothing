import React from 'react';
import './styles.scss';

const CartItem = ({ item }) => {
  return (
    <div className='cart-item'>
      <img className='item-image' src={item.imageUrl} alt={item.name} />
      <div className='item-details'>
        <span className='name'>{item.name}</span>
        <span className='price'>
          {item.quantity} x {item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
