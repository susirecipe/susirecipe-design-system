import styled from 'styled-components';

export const StyledCard = styled.div<{ width: string }>`
  width: ${props => props.width};
  display: inline-block;
`;

export const StyledCardHeader = styled.h1<{ headerColor?: string }>`
  padding: 10px;
  border-radius: 10px 10px 0 0;
  background-color: ${props => props.headerColor || '#6b6b6b'};
  text-align: center;
  font-weight: 600;
  font-size: 1.25rem;
  color: #fff;
`;

export const StyledCardContent = styled.div<{ height: string }>`
  height: ${props => props.height};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
  background-color: #cfcfcf;
  color: #333;
`;
