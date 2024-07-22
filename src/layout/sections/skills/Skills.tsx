import React from 'react';
import { SectionTitle } from '../../../components/Title/SectionTitle';
import styled from 'styled-components';
import { SkillCard } from '../../../components/skillCard/SkillCard';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

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
    <SkillsSection>
      <Container as={FlexWrapper} direction="column">
        <SectionTitle>My Skills</SectionTitle>
        <SkillCard
          iconArray={CardsIconArray}
          titleArray={CardsTitleArray}
        ></SkillCard>
      </Container>
    </SkillsSection>
  );
}

const SkillsSection = styled.section``;
