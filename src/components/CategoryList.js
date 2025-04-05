import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CategoryContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling */
  padding: 74px 10px 10px 10px;
  margin-top: 0px;
  margin-bottom: -15px;
`;

const CategoryCard = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
`;

function CategoryList({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (category) => {
    onCategorySelect(category);
  };

  return (
    <CategoryContainer>
        <CategoryCard key={'all'} onClick={() => handleCategorySelect('')}>
          {'all'}
        </CategoryCard>
      {categories.map((category) => (
        <CategoryCard key={category} onClick={() => handleCategorySelect(category)}>
          {category}
        </CategoryCard>
      ))}
    </CategoryContainer>
  );
}

export default CategoryList;