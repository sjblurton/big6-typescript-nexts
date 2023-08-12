'use client';

import GlobalStyle from '@/styles/global';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
