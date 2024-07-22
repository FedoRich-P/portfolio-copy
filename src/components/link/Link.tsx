import styled from 'styled-components';
import { myTheme } from '../../styles/Theme.styled';

type LinkPropsType = {
  $padding?: string;
  $fz?: string;
  $tt?: string;
  $color?: string;
};

export const Link = styled.a<LinkPropsType>`
  position: relative;
  padding: ${(props) => props.$padding || '0 2px'};
  font-family: Poppins;
  color: ${(props) => props.color || `${myTheme.colors.font}`};
  font-size: ${(props) => props.$fz || '14px'};
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 1px;
  text-transform: ${(props) => props.$tt};
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    top: 60%;
    right: 0;
    height: 10px;
    width: 100%;
    background-color: transparent;
    z-index: -1;
    transition: background-color 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      background-color: ${myTheme.colors.accent};
    }
  }
`;
