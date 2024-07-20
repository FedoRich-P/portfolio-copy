import React from 'react';
import { SectionTitle } from '../../../components/Title/SectionTitle';
import { SectionBtn } from '../../../components/buttons/SectionBtn';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export function Contacts() {
  return (
    <FlexWrapper as={ContactsSection} direction="column" align="center">
      <SectionTitle>Contacts</SectionTitle>
      <FlexWrapper as={Form} direction="column" rowGap="16px">
        <Input placeholder="Enter name" type="text"></Input>
        <Input placeholder="Enter mail" type="email"></Input>
        <Input as={Textarea} placeholder="Enter text"></Input>
        <SectionBtn>Send message</SectionBtn>
      </FlexWrapper>
    </FlexWrapper>
  );
}

const ContactsSection = styled.section`
  padding: 100px 20px;
  background-color: rgba(31, 31, 32, 1);
  text-align: center;
`;

const Form = styled.form`
  max-width: 540px;
  width: 100%;
  color: rgba(255, 255, 255, 1);
`;
const Input = styled.input`
  width: 100%;
  padding: 7px 15px;
  background-color: rgba(37, 37, 39, 1);
  border: 1px solid rgba(74, 74, 74, 1);
  color: inherit;
`;
const Textarea = styled.textarea`
  /* width: 100%; */
  min-height: 155px;
  /* padding: 7px 15px;
  background-color: rgba(37, 37, 39, 1);
  border: 1px solid rgba(74, 74, 74, 1);
  color: inherit; */
`;
