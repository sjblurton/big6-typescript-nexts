import { DefaultTheme } from 'styled-components';

const secondary = {
  main: '#f18701',
  accent: '#f5af19',
};

const error = {
  main: '#EA2B2B',
  accent: '#f12711',
};

export const theme: DefaultTheme = {
  palette: {
    primary: {
      main: '#2B3953',
      accent: '#34425D',
    },
    secondary,
    error: {
      main: '#EA2B2B',
      accent: '#f12711',
    },
    success: {
      main: '#31D0AA',
      accent: '#2ecc71',
    },
    common: {
      white: {
        main: '#fff',
        accent: '#f5f5f5',
      },
      black: {
        main: '#000',
        accent: '#1a1a1a',
      },
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    gradient: {
      main: `linear-gradient(200deg, ${secondary.main} 20%, ${error.accent} 80%)`,
      accent: `linear-gradient(200deg, ${error.accent} 20%, ${secondary.main} 80%)`,
    },
  },
  boxShadow: {
    main: '0px 6px 2px -4px rgba(14, 14, 44, 0.1), inset 0px -1px 0px rgba(14, 14, 44, 0.4)',
  },
};
