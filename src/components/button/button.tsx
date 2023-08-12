import React, { ButtonHTMLAttributes } from 'react';
import { ButtonWrapper } from './button.style';
import SpanComponent from '../typography/span';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary';
  shape: 'rounded' | 'circle' | 'square';
};

function Button({ children, ...restProps }: ButtonProps) {
  return (
    <ButtonWrapper {...restProps}>
      <SpanComponent variant="button">{children}</SpanComponent>
    </ButtonWrapper>
  );
}

export default Button;
