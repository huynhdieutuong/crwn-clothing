import React from 'react';
import './styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase/utils';
import { connect } from 'react-redux';

const Header = ({ currentUser, history }) => {
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(withRouter(Header));
