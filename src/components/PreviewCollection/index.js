import React from 'react';
import CollectionItem from '../CollectionItem';
import './styles.scss';

const PreviewCollection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
