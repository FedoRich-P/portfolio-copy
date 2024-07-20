import React from 'react';
import { SectionTitle } from '../../../components/Title/SectionTitle';
import styled from 'styled-components';
import { SkillCard } from '../../../components/skillCard/SkillCard';
import { FlexWrapper } from '../../../components/FlexWrapper';

const CardsIconArray = [
  'html',
  'css',
  'react',
  'typescript',
  'styled',
  'design',
];
const CardsTitleArray = [
  'html5',
  'css',
  'react',
  'typescript',
  'styled components',
  'web design',
];

export function Skills() {
  return (
    <FlexWrapper as={SkillsSection} direction="column" align="center">
      <SectionTitle>My Skills</SectionTitle>
      <SkillCard
        iconArray={CardsIconArray}
        titleArray={CardsTitleArray}
      ></SkillCard>
    </FlexWrapper>
  );
}

const SkillsSection = styled.section`
  padding: 100px 30px;
  text-align: center;
  background-color: rgba(37, 37, 39, 1);
`;
