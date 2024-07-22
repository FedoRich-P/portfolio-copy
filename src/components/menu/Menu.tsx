import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { Link } from '../link/Link';

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
                <Link $tt="uppercase" href="#">
                  {el}
                </Link>
              </li>
            );
          })}
        </FlexWrapper>
      </nav>
    </>
  );
}

const StyledList = styled.ul``;
