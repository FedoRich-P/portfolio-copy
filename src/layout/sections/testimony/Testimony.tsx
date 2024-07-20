import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/Title/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Slider } from '../../../components/slider/Slider';

export function Testimony() {
  return (
    <FlexWrapper as={StyledTestimony} direction="column" align="center">
      <SectionTitle marginBottom="60px">Testimony</SectionTitle>
      <Icon iconId="qupte"></Icon>
      <Slider></Slider>
    </FlexWrapper>
  );
}

const StyledTestimony = styled.section`
  padding: 100px 20px 84px;
  background-color: rgba(37, 37, 39, 1);
`;
