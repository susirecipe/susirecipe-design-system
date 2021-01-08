import styled from 'styled-components';

export const IntroduceContainer = styled.div`
  padding: 50px;
`;

export const ImageWarpper = styled.div`
  margin: 30px 0;
  text-align: center;
  img {
    width: 300px;
  }
`;

export const IntroduceComment = styled.article`
  text-align: left;

  h1 {
    line-height: 1.4;
    font-size: 2rem;
    color: #374553;
  }

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    color: #499cd3;
  }

  p {
    line-height: 1.5;
    color: #374553;
  }
  
  a {
    color: #9a9a9a;
  }

  a:hover {
    font-weight: 600;
  }
`;
