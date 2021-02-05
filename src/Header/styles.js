import styled from 'styled-components';

export const HeaderContainer = styled.nav `
  width: 100%;
  height: 75px;
  background: darkblue;
  color: #FFF;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
  position: fixed;
  top: 0;
`;

export const AlignContainer = styled.div `
  width: 70%;
  display: flex;
`;

export const LogoContainer = styled.div `
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const MenuContainer = styled.div `
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: #FFF;
    margin: 20px;
  }
  a:hover{
    background: red;
  }
`;


