import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        font-family: 'Heebo', sans-serif;
        background-color: hsl(0, 0%, 6%);
        color: white;
    }
`;


export default GlobalStyle