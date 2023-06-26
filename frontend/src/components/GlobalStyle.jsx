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

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
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
