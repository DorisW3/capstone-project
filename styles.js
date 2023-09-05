import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  :root{
    --background-color: #efefef;
    --font-color: #596978;
  }
  
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
    color: var(--font-color);
  }

  ul {
    list-style-type: none;
  }

 
`;
