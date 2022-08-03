import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';


import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import RequestScreen from './screens/requestProduct';


function App() {
  return (
    <Router>
    <div className="app">
      <Navbar/>
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/product/:id" element={<ProductScreen/>}/>
          <Route exact path="/cart" element={<CartScreen/>}/>
          <Route exact path="/request" element={<RequestScreen/>}/>
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
