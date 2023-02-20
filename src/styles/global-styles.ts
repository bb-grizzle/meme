import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style:none;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  }
  
  html{
    background-color: ${theme.colorPalette.sub.bg};
    &.hide-scrollbar{
      ${() => theme.layout.hideScroll};
    }
  }

  body{
    font-family:  ${theme.fontFamily.noto_sans_kr};
    background-color: ${theme.colorPalette.sub.bg};
    position: relative;
    word-break: keep-all;
    font-weight: 400;
  }

  img{
    vertical-align: top;
  }

  a{
    color: inherit;
    text-decoration:none;
    list-style:none;
  }

  input, select{
    border:none;
    width: 100%;
    border-radius: 0px;
    font-size: inherit;
    outline:none;
    border: 0px;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    background-color: transparent;
    min-height: 25px;

    &::placeholder {
      color: ${theme.color.placeholder};
    }
  }

    input::-webkit-date-and-time-value{ text-align:left; }

    input:-webkit-autofill,
    input:-webkit-autofill:focus {
      background-color: transparent;
      transition: background-color 600000s 0s, color 600000s 0s;
    }

    
    /* 
    input::-internal-autofill-selected{
      appearance: menulist-button;
      background-image: none !important;
      background-color: -internal-light-dark(rgba(232, 240, 254, 0), rgba(70, 90, 126, 0)) !important;
      color: fieldtext !important;
    } */

    textarea{
      border:none;
      width: 100%;
      font-size:inherit;
      border-radius: none;
      outline:none;
      border: 0px;
      font-family: inherit;
      resize: none;
      -webkit-appearance: none;
    -webkit-border-radius: 0;
    }

    select, option{
      border: 0px;
      font-family: inherit;
      padding:0;
      margin:0;
      outline:none;
    }
    
    button{
      border: 1px solid ${(props) => props.theme.colorPalette.bw[700]};
      background-color: ${(props) => props.theme.color.white};
    }
    
`;

export default GlobalStyles;
