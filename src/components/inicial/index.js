import React from 'react';
//import Menu from '../Menu';
import Menu from '../Menu/login'; //especifico
import Footer from '../Footer';
import styled from 'styled-components';
//tela de login
const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 500px;
  padding-left: 5px;
  padding-right: 5px;
`;

function PageDefaultLogin({ children }) {
  //destruct js{}
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
export default PageDefaultLogin;
