import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import for Routes
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import Products from './components/Products'; 
import Cart from './components/Cart'; 
import About from './components/About'; 
import  ProductDetail  from './components/DetailView'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
