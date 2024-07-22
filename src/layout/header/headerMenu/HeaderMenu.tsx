import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { myTheme } from '../../../styles/Theme.styled';

type HeaderMenuPropsType = {
  arr: Array<string>;
};

export function HeaderMenu(props: HeaderMenuPropsType) {
  return (
    <>
      <Nav>
        <FlexWrapper as={StyledList} columnGap="15px" wrap="wrap">
          {props.arr.map((el, i) => {
            return (
              <NavItem key={i}>
                <NavLink href="#">
                  {el}
                  <Mask>
                    <span>{el}</span>
                  </Mask>
                  <Mask>
                    <span>{el}</span>
                  </Mask>
                </NavLink>
              </NavItem>
            );
          })}
        </FlexWrapper>
      </Nav>
    </>
  );
}

const Nav = styled.nav``;
const StyledList = styled.ul``;

const NavLink = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 55px;
  text-transform: uppercase;
  color: transparent;
  /* color: rgba(117, 114, 213, 1); */
  transition: color 0.3s ease, border-color 0.5s ease;
  border-bottom: 1px solid transparent;

  /* &:hover {
    border-color: currentColor;
    color: rgba(255, 255, 255, 1);
  } */
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${myTheme.colors.accent};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const NavItem = styled.li`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    display: inline-block;
    background-color: ${myTheme.colors.accent};
    height: 3px;
    z-index: 1;
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${myTheme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`;
