import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase/utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import { selectCurrentUser } from '../../redux/user/selectors';
import { selectHiddenCart } from '../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './styles';

const Header = ({ currentUser, hiddenCart, history }) => {
  const handleSignOut = async () => {
    await auth.signOut();
    history.push('/auth');
  };

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink to='#' onClick={handleSignOut}>
            SIGNOUT
          </OptionLink>
        ) : (
          <OptionLink to='/auth'>SIGNIN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hiddenCart && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hiddenCart: selectHiddenCart,
});

export default connect(mapStateToProps)(withRouter(Header));
