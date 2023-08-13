import styled, { css } from 'styled-components';

const cardStyles = css`
  background: ${(props) => props.theme.palette.primary.accent};
  box-shadow: ${(props) => props.theme.boxShadow.main};
`;

export const Wrapper = styled.article<{ isCard: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 8px;
  width: 95%;
  height: 100%;
  border-radius: 16px;
  margin: 8px auto;
  @media (max-width: 640px) {
    flex-direction: column;
  }
  ${(props) => props.isCard && cardStyles};
`;
