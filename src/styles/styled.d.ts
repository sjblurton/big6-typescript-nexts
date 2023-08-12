import 'styled-components';

type MainColors = {
  main: string;
  accent: string;
};

type Colors = {
  [key: number]: string;
};
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: MainColors;
      secondary: MainColors;
      error: MainColors;
      success: MainColors;
      common: {
        white: MainColors;
        black: MainColors;
      };
      grey: Colors;
      gradient: MainColors;
    };
    boxShadow: {
      main: string;
    };
  }
}
