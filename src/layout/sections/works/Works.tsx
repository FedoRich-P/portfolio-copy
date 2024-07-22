import React from 'react';
import { SectionTitle } from '../../../components/Title/SectionTitle';
import styled from 'styled-components';
import { Menu } from '../../../components/menu/Menu';
import { Work } from './work/Work';
import { FlexWrapper } from '../../../components/FlexWrapper';
import firstPhoto from '../../../assets/images/works_1.webp';
import secondPhoto from '../../../assets/images/works_2.webp';
import { Container } from '../../../components/Container';
import { myTheme } from '../../../styles/Theme.styled';

const worksArray = ['all', 'landing page', 'react', 'spa'];

export function Works() {
  return (
    <WorksSection>
      <Container>
        <SectionTitle marginBottom="60px">My Works</SectionTitle>
        <Menu arr={worksArray}></Menu>
        <FlexWrapper wrap="wrap" justify="space-between">
          <Work
            title="Social Network"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            path={firstPhoto}
          ></Work>
          <Work
            title="Timer"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            path={secondPhoto}
          ></Work>
        </FlexWrapper>
      </Container>
    </WorksSection>
  );
}

const WorksSection = styled.section`
  nav {
    margin-bottom: 40px;
  }
`;
