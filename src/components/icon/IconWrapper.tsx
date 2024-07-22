import styled from 'styled-components';

export const IconWrapper = styled.div`
  position: relative;
  margin: 0 auto 40px;
  width: 80px;
  height: 80px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transform: rotate(-45deg) translate(-50%, -50%);
    transform-origin: top left;
  }
`;
