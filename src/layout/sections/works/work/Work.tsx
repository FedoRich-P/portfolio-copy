import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';

type WorkPropsType = {
  title: string;
  text: string;
  path: string;
};

export function Work(props: WorkPropsType) {
  return (
    <FlexWrapper as={StyledWork} columnGap="60px" direction="column">
      <WorkImage src={props.path} alt="Work photo"></WorkImage>
      <WorkDescr>
        <WorkTitle>{props.title}</WorkTitle>
        <WorkText>{props.text}</WorkText>
        <WorkLink>demo</WorkLink>
        <WorkLink>Code</WorkLink>
      </WorkDescr>
    </FlexWrapper>
  );
}

const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(37, 37, 39, 1);
`;
const WorkImage = styled.img`
  margin-bottom: 25px;
  width: 100%;
  max-height: 260px;
  object-fit: cover;
`;
const WorkDescr = styled.div`
  padding: 20px 25px;
  a + a {
    margin-left: 20px;
  }
`;
const WorkTitle = styled.h3`
  margin-bottom: 14px;
`;
const WorkText = styled.p`
  margin-bottom: 10px;
`;

const WorkLink = styled.a`
  position: relative;
  padding: 0 2px;
  display: inline-block;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 10;

  &:active {
    &::after {
      content: '';
      position: absolute;
      top: 60%;
      right: 0;
      height: 10px;
      width: 100%;
      background-color: rgba(117, 114, 213, 1);
      z-index: -1;
    }
  }
`;
