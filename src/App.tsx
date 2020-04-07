import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Characters from './components/Characters';
import Logo from './components/Logo';
import BackgroundStars from './components/BackgroundStars';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 32px 16px;
    background: #000000;
    font-family: Arial;
    line-height: 1.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <>
      <BackgroundStars />
      <Content>
        <Logo />
      </Content>
      <Characters />
      <GlobalStyle />
    </>
  );
}

export default App;
