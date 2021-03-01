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
          <NavLink to="/" exact activeClassName="is-active">Home</NavLink>
          <NavLink to="/tenant" exact activeClassName="is-active">Tenant</NavLink>
          <NavLink to="/contact" exact activeClassName="is-active">Contact</NavLink>
        </MenuContainer>
      </AlignContainer>
    </HeaderContainer>
  );
}
