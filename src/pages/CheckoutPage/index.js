import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotalPrice,
} from '../../redux/cart/selectors';
import { changeQuantity, removeItemCart } from '../../redux/cart/actions';

const CheckoutPage = ({ cartItems, changeQuantity, total, removeItemCart }) => {
  return (
    <div className='checkout-page'>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.imageUrl} alt={item.name} />
              </td>
              <td>{item.name}</td>
              <td className='quantity'>
                <div
                  className='arrow'
                  onClick={() => changeQuantity(item, 'decrease')}
                >
                  &#10094;
                </div>
                <span className='number'>{item.quantity}</span>
                <div
                  className='arrow'
                  onClick={() => changeQuantity(item, 'increase')}
                >
                  &#10095;
                </div>
              </td>
              <td>{item.price}</td>
              <td>
                <div
                  className='remove-button'
                  onClick={() => removeItemCart(item)}
                >
                  &#10005;
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td className='total'>TOTAL: ${total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  changeQuantity: (item, formula) => dispatch(changeQuantity(item, formula)),
  removeItemCart: (item) => dispatch(removeItemCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
