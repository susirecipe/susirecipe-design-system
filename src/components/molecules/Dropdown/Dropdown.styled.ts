import styled from 'styled-components';

export const StyledDropdown = styled.div<{ leftPos?: number; show: boolean }>`
  width: 100%;
  padding: 10px;
  padding-left: ${props => props.leftPos}px;
  height: 48px;
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  background-color: #262626;
  box-sizing: border-box;
`;
