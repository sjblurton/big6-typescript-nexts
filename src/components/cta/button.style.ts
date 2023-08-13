import styled, { css } from 'styled-components';
import { ButtonProps } from './button';

const baseStyles = css<ButtonProps>`
  text-decoration: none;
  padding: 8px;
  background: ${({ theme }) => theme.palette.primary.accent};
  box-shadow: ${({ theme }) => theme.boxShadow.main};
  border-radius: 8px;
  transition: all 250ms ease-in;

  &:focus {
    outline: ${({ theme }) => theme.palette.secondary.main} auto 1px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:disabled,
  &[disabled] {
    border: 1px solid ${({ theme }) => theme.palette.grey[400]};
    background-color: ${({ theme }) => theme.palette.grey[500]};
    color: ${({ theme }) => theme.palette.grey[800]};
  }
`;

const roundedStyles = css<ButtonProps>``;

const circleStyles = css<ButtonProps>``;

const squareStyles = css<ButtonProps>``;

const primaryStyles = css<ButtonProps>``;

const secondaryStyles = css<ButtonProps>``;

export const ButtonWrapper = styled.button<ButtonProps>`
  ${baseStyles}
`;
