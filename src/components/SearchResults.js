import React from 'react';
import styled from 'styled-components';

const SearchResultsContainer = styled.div`
  background-color: #fff;
//   border: 1px solid #ccc;
  padding: 60px 10px 10px 10px;
  margin-bottom:20px;
  border-radius: 5px;
  max-height: 400px;
  overflow-x: auto;
`;

const ResultItem = styled.div`
//   padding: 10px;
//   border-bottom: 1px solid #eee;
  margin-bottom:20px;
  &:last-child {
    border-bottom: none;
  }
`;
const CloseButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 6px 6px;
  border-radius: 5px;
  cursor: pointer;
//   margin-left: 10px;
`;


function SearchResults({ results, onClose }) {
  return (
    <SearchResultsContainer>
      <h3>Search Results <CloseButton onClick={onClose}>Close Results</CloseButton></h3>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        results.map((result) => (
          <ResultItem key={result.id}>
            {result.title} - {result.category}
          </ResultItem>
        ))
      )}
      
    </SearchResultsContainer>
  );
}

export default SearchResults;
