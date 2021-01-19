import styled from 'styled-components';

export const StyledHamberTab = styled.div`
  width: 320px;
  height: 100vh;
  padding: 40px;
  background-color: #000;
  box-sizing: border-box;
  overflow: scroll;

  // To hide scroll bar
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledImageWrapper = styled.div`
  margin-bottom: 40px;
  text-align: center;

  img {
    width: 120px;
  }
`;

export const StyledMainMenu = styled.div`
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ccc;
  color: #fff;

  h1 {
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 1.6rem;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 10px;
    padding-left: 20px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;
