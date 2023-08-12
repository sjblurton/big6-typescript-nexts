import styled, { css } from 'styled-components';
import { SpanProps } from './span';

const buttonStyles = css`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.common.white.main};
  font-weight: 600;
`;

export const Span = styled.span<SpanProps>`
  ${({ variant }) => variant === 'button' && buttonStyles}
`;
