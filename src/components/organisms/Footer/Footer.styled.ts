import styled from 'styled-components';

export const StyledFooter = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  align-items: flex-end;
  background-color: #000;
  box-sizing: border-box;
  color: #fff;

  @media (max-width: 1025px) {
    flex-direction: column-reverse;
  }
`;

export const StyledFooterInfo = styled.div`
  width: 60%;
  text-align: left;

  p {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  @media (max-width: 1025px) {
    width: 100%;
  }
`;

export const StyledImageWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: flex-end;

  img {
    width: 90px;
    height: 100%;
  }

  span {
    display: inline-block;
    margin-left: 10px;
    font-size: 0.85rem;
  }
`;

export const StyledFooterLink = styled.div`
  width: 40%;
  text-align: right;

  h1 {
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.5;
  }

  @media (max-width: 1025px) {
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
`;
