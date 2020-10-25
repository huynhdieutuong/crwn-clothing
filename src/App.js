import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/auth' component={AuthPage} />
      </Switch>
    </Router>
  );
}

export default App;
