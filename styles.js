import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  :root{
    --font-color: #596978;
    --border-color: #dedede;
    --violette-color: #6257e3;
    --form-color: #cccccc;
  }
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  @media only screen and (max-width: 600px) {
    
    body {
      font-family: system-ui;
      margin: auto;
      text-align: center;
      color: var(--font-color);
    }
  }

  ul {
    list-style-type: none;
  }

 
`;
