import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 :root {
    --primary: #047857;
    --secondary: #BEF263;
    --text: #171717;
    --background: #F8FAFC;
    --grey: #494949;
    --greyLight: #BBBBBB;
  }

  [data-theme="dark"] {
    --primary: #BEF263;
    --secondary:#047857;
    --text: #F8FAFC;
    --background: #171717;
    --grey: #BBBBBB;
    --greyLight: #EBEBEB;
  }

  @font-face {
      font-family: Inter;
      src: url(/static/fonts/Inter-VariableFont_slnt,wght.ttf);
  }

  html,
  body {
    color: var(--text);
    background: var(--background);
    padding: 0;
    margin: 0;
    font-family: Inter, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
