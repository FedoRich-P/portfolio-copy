import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { myTheme } from '../../styles/Theme.styled';

const iconsArr = ['instagram', 'telegram', 'vk', 'linkedin'];

export function Footer() {
  return (
    <FooterSection>
      <FooterTitle>Svetlana</FooterTitle>
      <FlexWrapper as={FooterList} columnGap="20px">
        {iconsArr.map((el, i) => {
          return (
            <FooterItem key={i}>
              <FlexWrapper as={FooterLink}>
                <Icon
                  iconId={el}
                  height="21"
                  width="21"
                  viewBox="0 0 21 21"
                ></Icon>
              </FlexWrapper>
            </FooterItem>
          );
        })}
      </FlexWrapper>
      <FooterText>© 2023 Svetlana Dyablo, All Rights Reserved.</FooterText>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  padding: 40px 25px;
  background-color: rgba(31, 31, 32, 1);
  text-align: center;
`;

const FooterTitle = styled.h2`
  margin-bottom: 26px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 1);
`;

const FooterList = styled.ul`
  margin-bottom: 30px;
`;
const FooterItem = styled.li``;

const FooterLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  color: ${myTheme.colors.accent};
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.4s ease, fill 0.4s ease,
    transform 0.3s ease-in-out;
  cursor: pointer;

  svg {
    fill: currentColor;
    transition: fill 0.3s ease-in-out;
  }

  &:hover {
    border-color: transparent;
    background-color: ${myTheme.colors.accent};
    transform: translateY(-2px);

    svg {
      fill: rgba(31, 31, 32, 1);
    }
  }
`;

const FooterText = styled.span`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  opacity: 0.5;
`;
