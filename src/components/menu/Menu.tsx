import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';

export function Menu() {
  return (
    <>
      <nav>
        <FlexWrapper as={StyledList} columnGap="15px" wrap="wrap">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Testimony</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </FlexWrapper>
      </nav>
    </>
  );
}

const StyledList = styled.ul`
  list-style: none;

  a {
    text-decoration: none;
    font-size: 25px;
    font-weight: 400;
    line-height: 55px;
    color: rgba(117, 114, 213, 1);
    transition: color 0.3s ease, border-color 0.5s ease;
    border-bottom: 1px solid transparent;

    &:hover {
      border-color: currentColor;
      color: rgba(255, 255, 255, 1);
    }
  }
`;
