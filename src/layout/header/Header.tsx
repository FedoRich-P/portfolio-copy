import React from 'react';
import { Logo } from '../../components/logo/Logo';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { HeaderMenu } from './headerMenu/HeaderMenu';

const menuArray = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

export function Header() {
  return (
    <StyledHeader>
      <FlexWrapper as={Container} justify="space-between" wrap="wrap">
        <Logo></Logo>
        <HeaderMenu arr={menuArray}></HeaderMenu>
      </FlexWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 0;
  width: 100%;
  background-color: rgba(31, 31, 32, 0.9);
  z-index: 1000;
`;
