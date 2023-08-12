import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import GlobalStyle  from '../src/styles/global';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered'
  },
  decorators: [
    withThemeFromJSXProvider({
      Provider: ThemeProvider,
      themes: {
        light: theme,
        dark: theme,
      },
      defaultTheme: 'light',
      GlobalStyles: GlobalStyle
    }),
  ],
};

export default preview;
