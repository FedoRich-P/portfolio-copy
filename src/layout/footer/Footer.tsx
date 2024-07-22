import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';

const iconsArr = ['instagram', 'telegram', 'vk', 'linkedin'];

// let iconsArr = ['instagram', 'telegram', 'vk', 'linkedin'].map((el, i) => {
//   return (
//     <Icon iconId={el} key={i} width="21" height="21" viewBox="0 0 21 21" />
//   );
// });

/* <Menu arr={iconsArr}></Menu> */

export function Footer() {
  return (
    <FooterSection>
      <FooterTitle>Svetlana</FooterTitle>
      <FooterList>
        {iconsArr.map((el, i) => {
          return (
            <FooterItem key={i}>
              <FooterLink>
                <Icon
                  iconId={el}
                  height="21"
                  width="21"
                  viewBox="0 0 21 21"
                ></Icon>
              </FooterLink>
            </FooterItem>
          );
        })}
      </FooterList>
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
  font-family: Josefin Sans;
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 1);
`;

const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  column-gap: 20px;
`;
const FooterItem = styled.li``;

const FooterLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.4s ease, fill 0.4s ease;

  svg {
    fill: #7572d5;
  }

  &:hover {
    border-color: transparent;
    background-color: rgba(117, 114, 213, 1);

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
  color: rgba(255, 255, 255, 1);
`;
