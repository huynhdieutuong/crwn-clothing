import React from 'react';
import './styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase/utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';

const Header = ({ currentUser, hiddenCart, history }) => {
  const handleSignOut = async () => {
    await auth.signOut();
    history.push('/auth');
  };

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
          <Link to='#' className='option' onClick={handleSignOut}>
            SIGNOUT
          </Link>
        ) : (
          <Link className='option' to='/auth'>
            SIGNIN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hiddenCart && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hiddenCart: state.cart.hiddenCart,
});

export default connect(mapStateToProps)(withRouter(Header));
