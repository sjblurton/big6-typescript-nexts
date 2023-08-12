import styled from 'styled-components';
import { ButtonProps } from './button';

export const ButtonWrapper = styled.button<ButtonProps>`
  background: blue
  ${({ theme,variant }) =>  variant === "primary" ? theme.palette.primary.main : theme.palette.secondary.main};
`;
