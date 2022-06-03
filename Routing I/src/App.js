import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Error from './components/Error';

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product/>} />

        {/* if Route is wrong or not found then show error message which is in Error.jsx */}
        <Route path='*' element={<Error/>} />
       
      </Routes>

    </div>
  );
}

export default App;
