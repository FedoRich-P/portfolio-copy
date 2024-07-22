import styled from 'styled-components';

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  rowGap?: string;
  columnGap?: string;
  gap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
  column-gap: ${(props) => props.columnGap};
  row-gap: ${(props) => props.rowGap};
  gap: ${(props) => props.gap};
  height: 100%;
`;
