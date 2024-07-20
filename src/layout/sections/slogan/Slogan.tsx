import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/Title/SectionTitle';
import { SectionBtn } from '../../../components/buttons/SectionBtn';

export function Slogan() {
  return (
    <SloganSection>
      <SectionTitle>I Am Available For Freelance</SectionTitle>
      <SectionBtn>Hire me</SectionBtn>
    </SloganSection>
  );
}

const SloganSection = styled.section`
  padding: 100px 25px;
  text-align: center;
  background-color: rgba(37, 37, 39, 1);
`;
