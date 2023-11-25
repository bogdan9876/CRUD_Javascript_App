import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, incrementItemQuantity, decrementItemQuantity } from '../../redux/cartActions';
import './cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncrementQuantity = (itemId) => {
    dispatch(incrementItemQuantity(itemId));
  };

  const handleDecrementQuantity = (itemId, quantity) => {
    if (quantity === 1) {
      const confirmed = window.confirm('Are you sure to remove this item from cart?');
      if (confirmed) {
        dispatch(removeFromCart(itemId));
      }
    } else {
      dispatch(decrementItemQuantity(itemId));
    }
  };

  const handleBackToCatalog = () => {
    navigate('/catalog');
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  const handleItemDetailClick = (itemId) => {
    navigate(`/lamp/${itemId}`);
  };

  const handleClearAllItems = () => {
    const confirmed = window.confirm('Are you sure to remove all items from cart?');
    if (confirmed) {
      cartItems.forEach((item) => {
        dispatch(removeFromCart(item.id));
      });
    }
  };

  return (
    <div className="cart">
      <h2>Cart Items</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} onClick={() => handleItemDetailClick(item.id)} alt={item.title} width="100" height="100" style={{ cursor: 'pointer' }}/>
            <div className="item-details">
              <p onClick={() => handleItemDetailClick(item.id)} style={{ cursor: 'pointer' }}> {item.title}</p>
              <p>Price: {item.price} uah</p>
              <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>Total amount: {calculateTotalAmount()} uah</p>
      </div>
      <div className="cart-buttons">
        <button onClick={handleBackToCatalog}>Back to Catalog</button>
        <button onClick={handleClearAllItems}>Clear All</button>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Cart;
