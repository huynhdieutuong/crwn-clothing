import React from 'react';
import './styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <Link to='#' className='option' onClick={() => auth.signOut()}>
            SIGNOUT
          </Link>
        ) : (
          <Link className='option' to='/auth'>
            SIGNIN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
