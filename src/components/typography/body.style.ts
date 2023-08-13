import styled, { css } from 'styled-components';

const bodyStyles = css`
  font-style: normal;
`;

export const P = styled.p`
  ${bodyStyles};
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.02em;
  font-weight: 500;
`;
export const PSmall = styled.p`
  ${bodyStyles};
  font-size: 14px;
  line-height: 140%;
  font-weight: 500;
`;
export const PBold = styled.p`
  ${bodyStyles};
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
`;
