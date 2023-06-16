import { createGlobalStyle } from 'styled-components';
import { mainFont, primaryColor, whiteColor } from './UI/variables';

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: ${mainFont};
  }

  #root {
      display: grid;
      grid-template-rows: auto 1fr auto;
      grid-template-columns: minmax(0, 1fr);
      min-height: 100vh;
  }

  a, button, input, textarea {
      font: inherit;
      color: inherit;
  }

  button {
      background-color: transparent;
  }

  a {
      text-decoration: none;
  }

  li {
      list-style: none;
  }

  h1, h2, h3 {
      font-weight: 700;
      line-height: 5rem;
  }

  ::-webkit-scrollbar {
      width: 5px;
  }

  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px ${primaryColor};
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
      background: ${primaryColor};
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
      background: ${whiteColor};
  }
`;
