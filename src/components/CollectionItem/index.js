import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/actions';
import CustomButton from '../CustomButton';
import './styles.scss';

const CollectionItem = ({ item, addToCart }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <div className='add-to-cart'>
        <CustomButton inverted onClick={() => addToCart(item)}>
          Add To Cart
        </CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
