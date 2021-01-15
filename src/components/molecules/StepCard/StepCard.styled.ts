import styled from 'styled-components';

export const StyledStepCard = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
`;

export const StyledStepCardHeader = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0 0 10px;
  background-color: #464646;
  font-weight: bold;
  font-size: 1.85rem;
  color: #fff;
`;

export const StyledStepCardContent = styled.div`
  width: calc(100% - 200px);
  height: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  border-radius: 0 10px 10px 0;
  box-sizing: border-box;
  background-color: #fafafa;
`;
