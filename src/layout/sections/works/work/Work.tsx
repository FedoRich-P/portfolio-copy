import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Link } from '../../../../components/link/Link';

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
        <Link $tt="uppercase">demo</Link>
        <Link $tt="uppercase">Code</Link>
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
