import React from 'react';
import { SectionTitle } from '../../../components/Title/SectionTitle';
import { SectionBtn } from '../../../components/buttons/SectionBtn';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { myTheme } from '../../../styles/Theme.styled';

export function Contacts() {
  return (
    <ContactsSection>
      <Container as={FlexWrapper} direction="column">
        <SectionTitle>Contacts</SectionTitle>
        <FlexWrapper as={Form} direction="column" rowGap="16px">
          <Input placeholder="Enter name" type="text"></Input>
          <Input placeholder="Enter mail" type="email"></Input>
          <Input as={Textarea} placeholder="Enter text"></Input>
          <SectionBtn>Send message</SectionBtn>
        </FlexWrapper>
      </Container>
    </ContactsSection>
  );
}

const ContactsSection = styled.section``;

const Form = styled.form`
  max-width: 540px;
  width: 100%;
  color: ${myTheme.colors.font};
`;
const Input = styled.input`
  width: 100%;
  padding: 7px 15px;
  font-family: 'Popins', sans-serif;
  background-color: rgba(37, 37, 39, 1);
  border: 1px solid rgba(74, 74, 74, 1);
  color: inherit;
`;
const Textarea = styled.textarea`
  min-height: 155px;
  resize: none;
`;
