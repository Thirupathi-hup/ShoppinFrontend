import React from 'react';
import { Link } from "react-router-dom"; 
import './index.css';
const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>My Website</h1>
      </header>

      <section className="main-section">
        <h2 className="title">Welcome to Our Website!</h2>
        <p className="description">
          Explore our products, features, and services tailored for you. We offer
          the best quality at unbeatable prices.
        </p>
        <Link to="/products">
          <button className="button">Shop</button>
        </Link>
      </section>

      <footer className="footer">
        <p>&copy; 2024  Shoppin. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
