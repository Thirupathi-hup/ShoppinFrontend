import React, { Component } from 'react'; 
import { NavLink } from 'react-router-dom'; 
import './index.css'; 

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">Shoppin</div>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link" activeClassName="active">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cart" className="nav-link" activeClassName="active">Cart</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
