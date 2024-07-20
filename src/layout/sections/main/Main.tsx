import React from 'react';
import styled from 'styled-components';
import ImagePath from '../../../assets/images/main-img.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';

export function Main() {
  return (
    <FlexWrapper as={MainSection} justify="space-around" wrap="wrap">
      <MainTitleBox>
        <MainText>Hi There</MainText>
        <MainName>I am Svetlana Dyablo</MainName>
        <MainTitle>A Web Developer. </MainTitle>
      </MainTitleBox>
      <PhotoWrapper>
        <Photo src={ImagePath} alt="Main photo" />
      </PhotoWrapper>
    </FlexWrapper>
  );
}

const MainSection = styled.section`
  padding: 0 30px;
  min-height: 100vh;
  background-color: rgba(31, 31, 32, 1);
`;
const MainTitleBox = styled.div`
  max-width: 563px;
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  text-align: start;
`;

const MainTitle = styled.h1`
  font-size: 27px;
  line-height: 40.5px;
  font-weight: 400;
`;

const MainName = styled.h2`
  position: relative;
  margin-bottom: 10px;
  font-size: 50px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0.05em;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    top: 38px;
    right: 0;
    width: 426px;
    height: 20px;
    background-color: rgba(117, 114, 213, 1);
    z-index: -1;
  }
`;

const MainText = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 21px;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    width: 360px;
    height: 470px;
    top: -19px;
    left: 29px;
    border: 5px solid rgba(117, 114, 213, 1);
    z-index: -1;
  }
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;
