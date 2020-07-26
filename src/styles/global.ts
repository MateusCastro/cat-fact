import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  *:focus{
    outline: 0;
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    outline: 0;
    height: 100%;
  }
  body > div {
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
