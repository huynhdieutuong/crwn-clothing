import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/selectors';
import './styles.scss';

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return <div className='collection-page'>Collection Page</div>;
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionUrlParam)(state),
});

export default connect(mapStateToProps)(CollectionPage);
