import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import ProductDetails from './Components/ProductContainer/ProductDetails';
import CustomHeader from './Components/Shared/Header/CustomHeader';
import Cart from './Components/YourCart/Cart';


function App() {

  return (
    <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/product/:specificCategory/:id'>
            <ProductDetails/>
          </Route>
          <Route exact path='/yourcart'>
            <CustomHeader/>
            <Cart/>
          </Route>
          <Route exact path='/:searchedWord'>
            <Home/>
          </Route>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
