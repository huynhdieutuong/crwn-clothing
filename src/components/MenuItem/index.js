import React from 'react';
import './styles.scss';

const MenuItem = ({ section }) => {
  const { title, imageUrl, size } = section;
  return (
    <div className={`menu-item ${size}`}>
      <div
        className='background-image'
        style={{
          background: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
