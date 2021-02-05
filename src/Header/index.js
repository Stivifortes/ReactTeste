import React from 'react';
import './header.css';
import { HeaderContainer, LogoContainer, MenuContainer, AlignContainer } from './styles';
export const Header = () => {
  return (
    <HeaderContainer id="navbar">
      <AlignContainer>
        <LogoContainer>
          Sharelabel logo
        </LogoContainer>
        <MenuContainer>
          <a href="#">Home</a>
          <a href="#">Service</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </MenuContainer>
      </AlignContainer>
    </HeaderContainer>
  );
}
