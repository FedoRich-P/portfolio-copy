import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ol, ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    width: 10%;
    height: 100%;
  }
`;
