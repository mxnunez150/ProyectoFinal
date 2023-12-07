// En SearchResult.js
import React from 'react';
import Product from './Product';

const SearchResult = ({ results, handleAddToCart, handleRemoveFromCart }) => {
  return (
    <div className="search-results">
      {results.map(product => (
        <Product
          key={product.id}
          {...product}
          addToCart={handleAddToCart} 
          removeFromCart={handleRemoveFromCart}
        />
      ))}
    </div>
  );
};

export default SearchResult;
