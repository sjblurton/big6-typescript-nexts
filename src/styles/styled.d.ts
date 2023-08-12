import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primary: {
                main: string;
                light: string;
            };
            secondary: {
                main: string;
                light: string;
            };
            error: {
                main: string;
            };
            success: {
                main: string;
            };
            common: {
                white: string;
                black: string;
            };
            gradient: {
                main: string;
            };
        };
    }
}