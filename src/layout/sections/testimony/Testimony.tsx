import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/Title/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Slider } from '../../../components/slider/Slider';
import { IconWrapper } from '../../../components/icon/IconWrapper';

export function Testimony() {
  return (
    <FlexWrapper as={StyledTestimony} direction="column" align="center">
      <SectionTitle marginBottom="60px">Testimony</SectionTitle>
      <IconWrapper as={FlexWrapper}>
        <Icon iconId="quote"></Icon>
      </IconWrapper>
      <Slider></Slider>
    </FlexWrapper>
  );
}

const StyledTestimony = styled.section`
  padding: 100px 20px 84px;
  background-color: rgba(37, 37, 39, 1);
`;

// const IconWrapper = styled.div`
//   position: relative;
//   margin: 0 auto 40px;
//   width: 80px;
//   height: 80px;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(255, 255, 255, 0.1);
//     transform: rotate(-45deg) translate(-50%, -50%);
//     transform-origin: top left;
//   }
// `;
