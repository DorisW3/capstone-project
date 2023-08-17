import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: system-ui;
    margin: auto;
    text-align: center;
    width: 600px;
    color: gray;
  }

  ul {
    list-style-type: none;
  }

 
`;
