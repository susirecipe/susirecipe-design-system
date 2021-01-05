import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: calc(100vw - 300px);
  margin-left: 300px;

  @media screen and (max-width: 769px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const MenuBtn = styled.span<{ hidden?: boolean }>`
  position: absolute;
  top: 10px;
  left: 10px;
  display: none;
  font-size: 2.7rem;
  color: #374553;
  cursor: pointer;

  @media screen and (max-width: 769px) {
    display: ${props => props.hidden ? 'none' : 'inline'};
  }
`;
