import React from 'react';

const Cart = ({ cartItems }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <div className="cart-info">
        <p>Total produtos en carrito: {totalItems}</p>
        <p>Total en $: {totalPrice.toFixed(2)}</p>
 
      </div>
    </div>
  );
};

export default Cart;
