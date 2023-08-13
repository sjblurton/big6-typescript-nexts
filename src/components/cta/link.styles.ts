import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.secondary.main};
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  font-style: normal;
`;
