import { createGlobalStyle } from 'styled-components';
import { myTheme } from './Theme.styled';

export const GlobalStyles = createGlobalStyle`

body {
  font-family: 'Popins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${myTheme.colors.font}
}
  
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
    color: ${myTheme.colors.font};
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  section {
  padding: 100px 0;
  }

  section:nth-of-type(odd) {
    background-color: ${myTheme.colors.primaryBG};
  }

  section:nth-of-type(even) {
    background-color: ${myTheme.colors.secondaryBg};
  }

  h3 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
`;
