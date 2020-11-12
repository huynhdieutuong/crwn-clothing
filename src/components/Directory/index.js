import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/selectors';
import MenuItem from '../MenuItem';
import './styles.scss';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map((section) => (
        <MenuItem key={section.id} section={section} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
