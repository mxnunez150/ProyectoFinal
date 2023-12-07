// src/components/Product.js
import React, { useState } from 'react';

const Product = ({ id, title, price, category, description, image, addToCart, removeFromCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    addToCart({ id, title, price, quantity: 1 });
    setQuantity(quantity + 1);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    setQuantity(quantity > 0 ? quantity - 1 : 0);
  };

  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{description.slice(0, 30)}...</p>
        <p>${price}</p>
        <button onClick={handleAddToCart}>Agregar al carrito +</button>
        <button onClick={handleRemoveFromCart} disabled={quantity === 0}>
          Quitar del carrito -
        </button>
        <p>Cantidad en el carrito: {quantity}</p>
      </div>
    </div>
  );
};

export default Product;
