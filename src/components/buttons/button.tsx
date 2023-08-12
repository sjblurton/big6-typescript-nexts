import React, { ButtonHTMLAttributes } from 'react';
import { ButtonWrapper } from './button.style';


export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary';
};

function Button(props: ButtonProps) {
  return <ButtonWrapper {...props} />;
}

export default Button;
