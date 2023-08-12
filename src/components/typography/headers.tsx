import React, { HTMLAttributes } from 'react';
import { H1, H2, H3, H4, H5, H6 } from './headers.style';

type Headers = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: Headers;
}

const headerComponents: Record<Headers, React.FC<HTMLAttributes<HTMLHeadingElement>>> = {
  h1: ({ ...restProps }) => <H1 {...restProps} />,
  h2: ({ ...restProps }) => <H2 {...restProps} />,
  h3: ({ ...restProps }) => <H3 {...restProps} />,
  h4: ({ ...restProps }) => <H4 {...restProps} />,
  h5: ({ ...restProps }) => <H5 {...restProps} />,
  h6: ({ ...restProps }) => <H6 {...restProps} />,
};

function Headers({ variant, ...restProps }: HeaderProps) {
  const HeaderComponent = headerComponents[variant];
  return <HeaderComponent {...restProps} />;
}

export default Headers;
