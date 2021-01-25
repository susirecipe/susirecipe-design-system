import styled from 'styled-components';

export const StyledConsultantCard = styled.div`
  width: 550px;
  height: 430px;
  padding: 50px;
  position: relative;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f8f8f8;

  @media (max-width: 769px) {
    width: 100%;
  }

  h1 {
    margin-bottom: 50px;
    font-weight: bold;
    font-size: 2.3rem;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 1.2rem;
  }

  ul {
    width: 55%;
    padding-left: 20px;
    list-style-type: square;

    li {
      line-height: 1.5;
    }
  }

  img {
    width: 200px;
    position: absolute;
    right: 10px;
    bottom: 0;
  }
`;
