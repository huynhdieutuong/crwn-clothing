import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import { auth, createUserProfileDocument } from './firebase/utils';
import { useEffect, useState, useRef } from 'react';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
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
  }, []);

  return (
    <Router>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/auth' component={AuthPage} />
      </Switch>
    </Router>
  );
};

export default App;
