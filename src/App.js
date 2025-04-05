import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import CartPage from './components/CartPage'; // Import the new component

const AppContainer = styled.div`
  font-family: sans-serif;
  // padding: 20px;
`;



function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [cartItems, setCartItems] = useState([]); // State to store cart items

  // Function to add item to cart
 const handleAddToCart = (product) => {
   setCartItems([...cartItems, product]);
   console.log('Added to cart:', product);
 };
  

  return (
    <AppContainer>
      <SearchBar onSearch={(results) => {
        setSearchResults(results);
        setShowSearchResults(true); // Show results when search is performed
      }} />

      {showSearchResults && <SearchResults results={searchResults} onClose={() => setShowSearchResults(false)} />}

      {!showSearchResults && (
        <>
          {/* <h2 style={{ marginTop: '10px', padding: '10px' }}>Top Categories</h2> */}
          <CategoryList onCategorySelect={setSelectedCategory} />
          <h2 style={{ marginTop: '0px', marginBottom: '0px', padding: '20px' }}>Top Products</h2>
          <ProductList category={selectedCategory} handleAddToCart = {handleAddToCart}/>
        </>
      )}

      <Footer />
    </AppContainer>
  );
}

export default App;
