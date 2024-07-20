import React from 'react';
import { SectionTitle } from '../../../components/Title/SectionTitle';
import styled from 'styled-components';
import { Menu } from '../../../components/menu/Menu';
import { Work } from './work/Work';
import { FlexWrapper } from '../../../components/FlexWrapper';
import firstPhoto from '../../../assets/images/works_1.webp';
import secondPhoto from '../../../assets/images/works_2.webp';

const worksArray = ['all', 'landing page', 'react', 'spa'];

export function Works() {
  return (
    <WorksSection>
      <SectionTitle marginBottom="60px">My Works</SectionTitle>
      <Menu arr={worksArray}></Menu>
      <FlexWrapper gap="60px" wrap="wrap">
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
    </WorksSection>
  );
}

const WorksSection = styled.section`
  padding: 100px 20px 107px;
  background-color: rgba(31, 31, 32, 1);

  nav {
    margin-bottom: 40px;
    ul {
      a {
        padding: 0 10px;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 1);

        &:active {
          border-bottom: 10px solid rgba(117, 114, 213, 1);
        }
      }
    }
  }
`;
