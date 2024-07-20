import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';

type MenuPropsType = {
  arr: Array<string>;
};

export function Menu(props: MenuPropsType) {
  return (
    <>
      <nav>
        <FlexWrapper as={StyledList} columnGap="15px" wrap="wrap">
          {props.arr.map((el, i) => {
            return (
              <li key={i}>
                <a href="#">{el}</a>
              </li>
            );
          })}
        </FlexWrapper>
      </nav>
    </>
  );
}

const StyledList = styled.ul`
  list-style: none;

  a {
    text-decoration: none;
    text-transform: uppercase;
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

/* <li>
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
          </li> */
