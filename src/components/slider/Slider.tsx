import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { myTheme } from '../../styles/Theme.styled';

export function Slider() {
  return (
    <FlexWrapper as={StyledSlider} direction="column">
      <Slide>
        <SlideText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </SlideText>
        <SlideName>@ivan ivanow</SlideName>
      </Slide>
      <Pagination>
        <span></span>
        <span className="active"></span>
        <span></span>
      </Pagination>
    </FlexWrapper>
  );
}

const StyledSlider = styled.div`
  max-width: 500px;
`;
const Slide = styled.div`
  color: rgba(255, 255, 255, 1);
  text-align: center;
`;
const SlideText = styled.p`
  margin-bottom: 15px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;
const SlideName = styled.span`
  display: inline-block;
  margin-bottom: 35px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.5);

    &.active {
      width: 20px;
      background-color: ${myTheme.colors.accent};
      border-radius: 20px;
    }
  }

  span + span {
    margin-left: 5px;
  }
`;
