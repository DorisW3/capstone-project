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
    
    body {
      font-family: system-ui;
      width: 414px;
      overflow-x: hidden;
      text-align: center;
      color: var(--font-color);
      margin: auto;
    }


  ul {
    list-style-type: none;
  }

 
`;
