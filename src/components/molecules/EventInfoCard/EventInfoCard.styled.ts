import styled from 'styled-components';

export const StyledEventInfoCard = styled.div`
  width: 100%;
  padding: 25px 50px;
  border-radius: 10px;
  box-shadow: 0 5px 15px 0 rgba(199, 199, 199, 0.24);
  box-sizing: border-box;

  @media (max-width: 1025px) {
    padding: 20px 30px;
  }
`;

export const StyledInfoRow = styled.div`
  display: flex;
  margin: 20px 0;

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledInfoTab = styled.span`
  width: 90px;
  padding: 10px;
  border-radius: 10px;
  background-color: #e2ce38;
  box-shadow: 0 3px 6px 0 rgba(180, 180, 180, 0.16);
  text-align: center;
  font-weight: 600;
  color: #fff;

  @media (max-width: 1025px) {
    width: 80px;
    padding: 7px;
  }

  @media (max-width: 769px) {
    margin-bottom: 15px;
  }
`;

export const StyledInfoContent = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
  text-align: center;

  @media (max-width: 769px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`;
