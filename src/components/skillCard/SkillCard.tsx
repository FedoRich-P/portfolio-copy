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
          <SkillCardIcon as={FlexWrapper}>
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

const SkillCardList = styled.ul``;
const SkillCardItem = styled.li`
  padding: 62px 20px 40px;
  max-width: 380px;
  min-height: 338px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
`;
const SkillCardIcon = styled.div`
  position: relative;
  margin: 0 auto 40px;
  /* margin-bottom: 40px; */
  width: 80px;
  height: 80px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transform: rotate(-45deg) translate(-50%, -50%);
    transform-origin: top left;
  }
`;
const SkillCardTitle = styled.h3`
  margin-bottom: 15px;
  text-transform: uppercase;
`;
const SkillCardText = styled.p`
  line-height: 21px;
  text-align: center;
`;
