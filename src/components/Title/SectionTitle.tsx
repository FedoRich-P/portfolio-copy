import styled from 'styled-components';

type SectionTitlePropsType = {
  marginBottom?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  position: relative;
  margin-bottom: ${(props) => props.marginBottom || '50px'};
  padding-bottom: 30px;
  font-size: 36px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 5px;
  color: rgba(255, 255, 255, 1);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: calc(50% - 27px);
    width: 55px;
    height: 1px;
    background-color: rgba(117, 114, 213, 1);
  }
`;
