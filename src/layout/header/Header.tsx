import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import styled from 'styled-components';

export function Header() {
  return (
    <StyledHeader>
      <Logo></Logo>
      <Menu></Menu>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgba(31, 31, 32, 0.9);
`;
