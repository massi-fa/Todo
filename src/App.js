import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.25s;
  }
  body {
    overflow: hidden;
    height: 100%;
  } 
`;

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 10px;
  text-align: center;
  border: 2px solid;
  border-radius: 10px;
`;

const H1 = styled.h1`
  color: black;
`;

const H2 = styled.h1`
  color: black;
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <H1>Ciao Corso!!</H1>
    <H2>Siete pronti a imparare le basi della programmazione web?</H2>
  </Container>
);

export default App;