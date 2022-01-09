import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html { font-size: 62.5%; } 
body { 
    font-family:${({ theme }) => theme.font.family};
    font-weight:${({ theme }) => theme.font.weightRegular};
    font-size: 1.6rem;
    background-color:${({ theme })=> theme.colors.white};
    color:${({ theme }) => theme.colors.darkBlue};
}
*,*::after,*::before{
    box-sizing: border-box;
    padding: 0;
    margin:0;
    font-family:${({ theme }) => theme.font.family};
}
img {
    width: 100%;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color:inherit;
}
button{
    border:none;
    outline:none;
    background:none;
    cursor:pointer;
}
`

export default GlobalStyle;