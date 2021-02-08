import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, LogoContainer, MenuContainer, AlignContainer } from './styles';
export const Header = () => {
  return (
    <HeaderContainer id="navbar">
      <AlignContainer>
        <LogoContainer>
          Sharelabel logo
        </LogoContainer>
        <MenuContainer>
          <NavLink  exact to="/" activeClassName="is-active">Home</NavLink>
          {/* <NavLink to="/checkout" activeClassName="is-active">Checkout</NavLink> */}
        </MenuContainer>
      </AlignContainer>
    </HeaderContainer>
  );
}
