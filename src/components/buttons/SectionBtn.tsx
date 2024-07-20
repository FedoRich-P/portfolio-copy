import styled from 'styled-components';

export const SectionBtn = styled.button`
  position: relative;
  padding: 12px 30px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
  background-color: transparent;
  border: none;

  &::after {
    content: '';
    position: absolute;
    top: calc(100% - 16px);
    left: 50%;
    transform: translateX(-50%);
    width: 77px;
    height: 10px;
    background-color: rgba(117, 114, 213, 1);
  }
`;
