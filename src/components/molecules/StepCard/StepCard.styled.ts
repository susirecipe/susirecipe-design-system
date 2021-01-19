import styled from 'styled-components';

export const StyledStepCard = styled.div`
  width: 100%;
  height: 150px;
  display: flex;

  @media (max-width: 1025px) {
    flex-direction: column;
    height: initial;
  }
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

  @media (max-width: 1025px) {
    width: 100%;
    height: 70px;
    border-radius: 10px 10px 0 0;
  }
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

  @media (max-width: 1025px) {
    width: 100%;
    padding: 30px 10px;
    justify-content: center;
    border-radius: 0 0 10px 10px;
  }
`;
