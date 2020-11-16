import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/CollectionItem';
import { selectCollection } from '../../redux/shop/selectors';
import './styles.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionUrlParam)(state),
});

export default connect(mapStateToProps)(CollectionPage);
