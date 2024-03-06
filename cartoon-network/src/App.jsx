import React from 'react';
import Header from './Components/Header/Header.jsx';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  background-color: #EDD820;
}
`;

export default function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    </>
  )
}