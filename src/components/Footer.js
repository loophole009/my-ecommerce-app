import React from 'react';
import styled from 'styled-components';
import { FaHome, FaBars, FaShoppingBag, FaRegListAlt } from 'react-icons/fa';

const FooterContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterIcon = styled.div`
  cursor: pointer;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterIcon><FaHome /></FooterIcon>
      <FooterIcon><FaRegListAlt /></FooterIcon>
      <FooterIcon><FaShoppingBag /></FooterIcon>
      <FooterIcon><FaBars /></FooterIcon>
    </FooterContainer>
  );
}

export default Footer;
