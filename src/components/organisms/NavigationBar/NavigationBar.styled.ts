import styled from 'styled-components';

export const StyledNavivagtionBar = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  background-color: #606060;
  box-sizing: border-box;

  img {
    width: 90px;
    margin: 0 10px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLinkBox = styled.div`
  margin: 0 30px;
  display: flex;
  align-items: stretch;
`;

export const LinkWrapper = styled.div<{ isHover?: boolean }>`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  background-color: ${props => props.isHover ? '#262626' : 'none'};
  box-sizing: border-box;

  a {
    margin: 0;
  }
`;
