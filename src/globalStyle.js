import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    width:100vw;
    font-family:poppins;
    font-display:optional;
}
`;
export default GlobalStyle;
