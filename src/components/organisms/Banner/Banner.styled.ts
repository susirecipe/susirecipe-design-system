import styled from 'styled-components';

export const StyledBanner = styled.section`
  width: 100%;
  padding: 30px 50px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const StyledDescriptionBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1025px) {
    display: none;
  }

  h1 {
    font-weight: bold;
    font-size: 1.8rem;
    color: #fff;
  }

  h2 {
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 1.4rem;
    color: #fff;
  }
`;

export const StyledSubmitBox = styled.form`
  width: 50%;
  display: flex;

  @media (max-width: 1025px) {
    width: 100%;
  }

  .inputbox {
    width: 50%;
  }

  .buttonbox {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .checkbox {
      display: flex;
      align-items: center;
    }

    span {
      margin-left: 10px;
      font-size: 0.85rem;
      color: #fff;
    }
  }
`;
