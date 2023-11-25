import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, incrementItemQuantity, decrementItemQuantity } from '../../redux/cartActions';
import './cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrementQuantity = (itemId) => {
    dispatch(incrementItemQuantity(itemId));
  };

  const handleDecrementQuantity = (itemId) => {
    dispatch(decrementItemQuantity(itemId));
  };

  const handleBackToCatalog = () => {
    navigate('/catalog');
  };

  return (
    <div className="cart">
      <h2>Cart Items</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} width="100" height="100" />
            <div className="item-details">
              <p>{item.title}</p>
              <p>Price: {item.price} uah</p>
              <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-buttons">
        <button onClick={handleBackToCatalog}>Back to Catalog</button>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Cart;
