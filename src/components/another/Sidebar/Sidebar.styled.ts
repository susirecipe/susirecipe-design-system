import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e6e6e6;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: scroll;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  padding: 30px 0;
  text-align: center;

  img {
    width: 70%;
  }
`;

export const ComponentsList = styled.div`
  ul {
    padding: 20px;
  }

  ul .subtitle {
    margin-bottom: 7px;
    font-weight: 500;
    font-size: 1.1rem;
    color: #4284bd;
  }

  ul li {
    margin-left: 20px;
    padding: 5px 0;
  }

  ul a {
    color: inherit;
    text-decoration: none;
  }

  ul a:hover {
    color: #499cd3;
  }
`;

export const CopyRight = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 0.7rem;
  color: #a6a6a6;
`;
