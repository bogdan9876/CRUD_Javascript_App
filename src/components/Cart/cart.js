import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementItemQuantity } from '../../redux/cartActions';
import './cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrementQuantity = (itemId) => {
    dispatch(incrementItemQuantity(itemId));
  };

  return (
    <div className="cart">
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} width="50" height="50" />
            <div>
              <p>{item.title}</p>
              <p>Price: {item.price} uah</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
