import React, { useState, useEffect } from 'react';
import Product from './Product';
import SearchResult from './SearchResult';
import Pagination from './Pagination';
import Cart from './Cart';

const Store = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const productsPerPage = 10;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleSearch = async () => {
    try {
      if (searchText.trim() === '') {
        // Si el campo de búsqueda está vacío, mostrar todos los productos
        setSearchResults([]);
        return;
      }

      const response = await fetch(`https://fakestoreapi.com/products/${searchText}`);
      if (!response.ok) {
        throw new Error('Error al buscar productos');
      }
      const json = await response.json();
      setSearchResults([json]);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleAddToCart = item => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // Si el producto ya está en el carrito, incrementar la cantidad
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      // Si el producto no está en el carrito, agregarlo
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = itemId => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="store">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por número de producto..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <Cart cartItems={cartItems} />
      {searchResults.length > 0 ? (
        <SearchResult
          results={searchResults}
          handleAddToCart={handleAddToCart}  
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ) : (
        <>
          <div className="product-grid">
            {currentProducts.map(product => (
              <Product
                key={product.id}
                {...product}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
              />
            ))}
          </div>
          <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
        </>
      )}
    </div>
  );
};

export default Store;
