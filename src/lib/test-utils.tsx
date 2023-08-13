import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MemoryRouterProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </MemoryRouterProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
