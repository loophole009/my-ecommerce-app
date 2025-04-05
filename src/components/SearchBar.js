import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const SearchContainer = styled.div`
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  // margin-bottom: 10px;
  // margin-top: 10px;
  padding: 10px;
  position: fixed;
  width: 100%;
  justify-content: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50%;
`;

const SearchButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.get(`https://fakestoreapi.com/products?q=${searchTerm}`);
          onSearch(response.data); // Pass the filtered results to App.js
      } catch (error) {
          console.error('Error fetching search results:', error);
          onSearch([]); // Handle errors by passing an empty array
      }
  };


  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <SearchButton onClick={handleSubmit}>
        <FaSearch />
      </SearchButton>
    </SearchContainer>
  );
}

export default SearchBar;