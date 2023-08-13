import React, { HTMLAttributes } from 'react';
import { H1, H2, H3 } from './headers.style';

type Headers = 'h1' | 'h2' | 'h3';

export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: Headers;
}

const headerComponents: Record<Headers, React.FC<HTMLAttributes<HTMLHeadingElement>>> = {
  h1: ({ ...restProps }) => <H1 {...restProps} />,
  h2: ({ ...restProps }) => <H2 {...restProps} />,
  h3: ({ ...restProps }) => <H3 {...restProps} />,
};

function Headers({ variant, ...restProps }: HeaderProps) {
  const HeaderComponent = headerComponents[variant];
  return <HeaderComponent {...restProps} />;
}

export default Headers;
