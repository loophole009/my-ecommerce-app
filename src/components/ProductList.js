import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  // padding: 60px;
  padding: 10px 20px 60px 20px;
  overflow-x: auto;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    padding: 10px 20px 60px 20px;
  }
  // max-height: 540px;
  max-width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const ProductCard = styled.div`
  // border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
`;

const ProductImage = styled.img`
  // display: block;
  // max-width:460px;
  // max-height:400px;
  // @media (max-width: 768px) {
  //   width: 40%;
  //   height: auto;
  // }
  width: 50%;
  height: auto;
  // marging: 40px;
  // max-width: 100%;
  // max-height: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ActionButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
//   margin-left: 10px;
`;

function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const handleBuy = (product) => {
    alert(`Buying ${product.name}!`); // Replace with actual purchase logic
  };

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product); // Replace with adding to cart in App.js
    // You will need to call a function passed from App.js to update the cart state
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response;
        if (category) {
          response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        } else {
          response = await axios.get('https://fakestoreapi.com/products'); // Fetch all products if no category is selected
        }
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);
  

  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <ButtonsContainer>
            <ActionButton onClick={() => handleBuy(product)}>Buy</ActionButton>
            <ActionButton onClick={() => handleAddToCart(product)}>Add to Cart</ActionButton>
          </ButtonsContainer>
        </ProductCard>
      ))}
    </ProductGrid>
  );
}

export default ProductList;
