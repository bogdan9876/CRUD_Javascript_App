import React from 'react';
import { useSelector } from 'react-redux';
import './cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.items);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} width="50" height="50" />
            <div>
              <p>{item.title}</p>
              <p>Price: {item.price} uah</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
