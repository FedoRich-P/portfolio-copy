import styled from 'styled-components';
import { myTheme } from '../../styles/Theme.styled';

type SectionTitlePropsType = {
  marginBottom?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  position: relative;
  margin-bottom: ${(props) => props.marginBottom || '50px'};
  font-family: 'Josefin Sans', sans-serif;
  padding-bottom: 30px;
  font-size: 36px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 5px;
  text-align: center;
  color: rgba(255, 255, 255, 1);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 55px;
    height: 1px;
    transform: translateX(-50%);
    background-color: ${myTheme.colors.accent};
  }
`;
