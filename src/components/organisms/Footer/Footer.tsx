import React from 'react';
import { StyledFooter, StyledFooterInfo, StyledImageWrapper, StyledFooterLink } from './Footer.styled';
import Icon from 'components/atoms/Icon/Icon';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledFooterInfo>
        <StyledImageWrapper>
          <img src={process.env.PUBLIC_URL + '/asset/logo3.png'} alt="logo" />
          <span>&copy;WESH</span>
        </StyledImageWrapper>
        <p>대표 김준호 | 사업자등록번호 860-40-003688 | 통신판매업신고번호 제 2018-성남중원-0234호</p>
        <p>본점 서울특별시 서초구 강남대로 369 에이플러스에셋타워 12층 | 지점안내 전화: 02-363-7577</p>
        <p>이메일: susirecipe@gmail.com</p>
        <p>문의시간: 월~금 10:00 ~ 19:00</p>
      </StyledFooterInfo>
      <StyledFooterLink>
        <h1>수시레시피만의</h1>
        <h1>차별화된 입시정보 받기</h1>
        <Icon src={process.env.PUBLIC_URL + '/asset/facebook_white.svg'} to="#" />
        <Icon src={process.env.PUBLIC_URL + '/asset/instagram_white.svg'} to="#" />
        <Icon src={process.env.PUBLIC_URL + '/asset/youtube_white.svg'} to="#" />
      </StyledFooterLink>
    </StyledFooter>
  );
};

export default Footer;
