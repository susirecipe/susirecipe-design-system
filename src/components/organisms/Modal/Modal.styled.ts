import styled from 'styled-components';

export const StyledModal = styled.div<{ isOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const StyledModalContentBox = styled.div`
  width: 600px;
  height: 80vh;
  padding: 20px;
  position: relative;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  overflow: scroll;
  background-color: #fff;

  @media (max-width: 769px) {
    width: 90%;
  }

  .close {
    padding: 8px;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.1rem;
    color: #374553;
    cursor: pointer;
  }

  // To hide scrollbar
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

`;

export const StyledModalBlackLayout = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;
