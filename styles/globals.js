import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    height: 100%;
  }
  body {
    font-family: ${props => props.theme.fonts.title};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    height: 100%;
  }
  h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }

  h1 {
    font-family: ${props => props.theme.fonts.main};
    color: hsl(78deg 68% 78%);
    font-size: 5em;
    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 3em;
    }
  }

  h2 {
    font-family: ${props => props.theme.fonts.main};
    color: hsl(78deg 68% 78%);
    font-size: 5em;
    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 2em;
    }
  }

  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;