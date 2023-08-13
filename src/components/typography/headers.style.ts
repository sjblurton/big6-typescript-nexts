import styled, { css } from 'styled-components';

const headerStyles = css`
  font-style: normal;
  font-weight: bold;
  letter-spacing: -0.02em;
  text-transform: capitalize;
`;

export const H1 = styled.h1`
  ${headerStyles}
  font-size: clamp(32px, 4vw + 1rem, 64px);
  line-height: clamp(36px, 4vw, 70px);
`;
export const H2 = styled.h2`
  ${headerStyles}
  font-size: clamp(24px, 2vw + 1rem, 32px);
  line-height: 47px;
  letter-spacing: -0.02em;
`;
export const H3 = styled.h3`
  ${headerStyles}
  font-size: clamp(18px, 2vw + 1rem, 26px);
  line-height: 28px;
  letter-spacing: -0.02em;
`;
