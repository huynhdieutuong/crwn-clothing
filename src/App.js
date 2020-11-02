import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/utils';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import { setCurrentUser } from './redux/user/actions';
import { selectCurrentUser } from './redux/user/selectors';
import { createStructuredSelector } from 'reselect';

const App = ({ setCurrentUser, currentUser }) => {
  let unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) =>
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        );
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribeFromAuth.current();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route
          exact
          path='/auth'
          render={() => (currentUser ? <Redirect to='/' /> : <AuthPage />)}
        />
      </Switch>
    </Router>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
