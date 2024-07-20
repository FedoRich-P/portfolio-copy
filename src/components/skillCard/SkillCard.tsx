import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { FlexWrapper } from '../FlexWrapper';

type SkillCardPropsType = {
  iconArray: Array<string>;
  titleArray: Array<string>;
};

export function SkillCard(props: SkillCardPropsType) {
  return (
    <FlexWrapper as={SkillCardList} wrap="wrap">
      {props.iconArray.map((el, i) => (
        <SkillCardItem key={i}>
          <SkillCardIcon>
            <Icon iconId={el}></Icon>
          </SkillCardIcon>
          <SkillCardTitle>{props.titleArray[i]}</SkillCardTitle>
          <SkillCardText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
          </SkillCardText>
        </SkillCardItem>
      ))}
    </FlexWrapper>
  );
}

const SkillCardList = styled.ul`
  width: 79%;
`;
const SkillCardItem = styled.li`
  padding: 20px;
  padding-top: 40px;
  width: 26%;
  min-height: 338px;
  color: rgba(255, 255, 255, 1);
`;
const SkillCardIcon = styled.span`
  position: relative;
  display: inline-block;
  margin-bottom: 40px;
  width: 80px;
  height: 80px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transform: rotate(-45deg) translateY(-9px) translateX(9px);
  }
`;
const SkillCardTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const SkillCardText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
`;
