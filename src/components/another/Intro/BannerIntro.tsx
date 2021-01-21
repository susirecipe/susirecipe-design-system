import Banner from 'components/organisms/Banner/Banner';
import React from 'react';
import {
  IntroContainer,
  IntroSmallHeader,
  IntroParagraph,
  ComponentWrapper,
  MarginBox,
  CodeBox,
  ListBox,
} from './global-intro.styled';

const BannerIntro: React.FC = () => {
  const description = '위의 보고계신 대학이 당신의 대학이 될 수 있습니다.';

  return (
    <IntroContainer>
      <IntroParagraph>
        베너는 수시레시피 페이지에 중요 기능입니다. 보통 웹 하단에 위치하여 사용자들에게 지속적인 광고성 정보전달을 위해
        제작하였습니다. <br />
        기존의 베너로 유사하게 디자인하였지만 언제든 수정이 필요할 수 있는 컴포넌트입니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <Banner description={description} />
      </ComponentWrapper>
      <MarginBox margin={40} />

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        넓이는 항상 <b>풀사이즈</b>여야만 합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>&lt;Banner description="위의 보고계신 대학이 당신의 대학이 될 수 있습니다." /&gt;</code>
      </CodeBox>
      <ListBox>
        <li>description: string (배너 왼쪽 상단의 글)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default BannerIntro;
