import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [], // To store items fetched from the backend
      loading: true, 
      error: null,
    };
  }

  componentDidMount() {
    this.fetchCartItems();
  }

  fetchCartItems = () => {
    fetch('https://shopinbackend.onrender.com/cart')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          cartItems: data,
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: 'Failed to load cart items',
        });
      });
  };

  handleCheckout = () => {
    const { navigate } = this.props;
    navigate('/products'); // Navigate to /products
  };

  render() {
    const { cartItems, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p>{item.name}</p>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="checkout-button" onClick={this.handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    );
  }
}

// Wrapper to pass the navigate function
const CartWithNavigate = (props) => {
  const navigate = useNavigate();
  return <Cart {...props} navigate={navigate} />;
};

export default CartWithNavigate;
