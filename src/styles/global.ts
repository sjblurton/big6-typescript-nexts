import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border:0;
    }
    a{
        text-decoration: none;
        color: ${(props) => props.theme.palette.secondary.main};
    }
    body {
        background-color: ${(props) => props.theme.palette.primary.main};
        color: ${(props) => props.theme.palette.common.white.main};
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
