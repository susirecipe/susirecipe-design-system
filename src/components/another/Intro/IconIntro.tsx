import React from 'react';
import {
  IntroContainer,
  IntroParagraph,
  IntroSmallHeader,
  ComponentWrapper,
  MarginBox,
  PropsTable,
  CodeBox,
  ListBox,
} from './global-intro.styled';
import { WebIcon, AppIcon } from 'components/atoms/Icon/Icon';

const IconIntro: React.FC = () => {
  return (
    <IntroContainer>
      <IntroParagraph>
        아이콘은 웹에서 쓰일 일이 굉장히 많습니다. 주로 sns로 연결할 때도 사용되고 심플한 UI를 구현할 때도 사용됩니다.{' '}
        <br />
        하지만 아이콘의 크기나 테마가 통일되지 않는다면 굉장히 복잡해보일 것입니다. 그래서 우리는 이러한 아이콘을
        컴포넌트화를 통해 통일하고자 했습니다. <br />
        다른 링크로의 연결과 앱과 웹의 크기의 통일성을 갖추었습니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <WebIcon src={process.env.PUBLIC_URL + '/asset/facebook.svg'} alt="icon" />
        <WebIcon src={process.env.PUBLIC_URL + '/asset/twitter.svg'} alt="icon" />
        <WebIcon src={process.env.PUBLIC_URL + '/asset/youtube.svg'} alt="icon" />
        <WebIcon src={process.env.PUBLIC_URL + '/asset/instagram.svg'} alt="icon" />
        <WebIcon src={process.env.PUBLIC_URL + '/asset/share.svg'} alt="icon" />
      </ComponentWrapper>
      <MarginBox margin={40} />

      <IntroSmallHeader>Props</IntroSmallHeader>
      <PropsTable>
        <thead>
          <tr>
            <th>고정 요소</th>
            <th>가변 요소</th>
            <th>지정 요소</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>비율</td>
            <td>소스</td>
            <td>크기 (웹, 앱)</td>
          </tr>
        </tbody>
      </PropsTable>

      <IntroSmallHeader>Types</IntroSmallHeader>
      <ComponentWrapper>
        웹 아이콘
        <WebIcon src={process.env.PUBLIC_URL + '/asset/youtube.svg'} alt="icon" />
        <MarginBox margin={30} />
        앱 아이콘
        <AppIcon src={process.env.PUBLIC_URL + '/asset/youtube.svg'} alt="icon" />
        <MarginBox margin={30} />
        링크 웹 아이콘
        <WebIcon to="#" src={process.env.PUBLIC_URL + '/asset/youtube.svg'} alt="icon" />
        <MarginBox margin={30} />
        링크 앱 아이콘
        <AppIcon to="#" src={process.env.PUBLIC_URL + '/asset/youtube.svg'} alt="icon" />
      </ComponentWrapper>
      <MarginBox margin={80} />

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        이 컴포넌트는 <b>크기가 고정</b>이라는 것을 유의해야합니다. 반응형을 위해서 웹과 앱으로 형태를 나누었지만 그
        안에서 해결해야 합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>
          &lt;WebIcon /&gt;&lt;AppIcon /&gt;
          <br />
          <br />
          &lt;WebIcon <br />
          &nbsp;&nbsp;to="/path" <br />
          &nbsp;&nbsp;src=&#123;process.env.PUBLIC_URL + "/asset/icon.svg"&#125; <br />
          &nbsp;&nbsp;alt="icon" <br />
          &nbsp;&nbsp;onClick=&#123;clickMethod&#125; <br />
          /&gt;
        </code>
      </CodeBox>
      <ListBox>
        <li>to: string (라우팅 경로)</li>
        <li>src: string (아이콘 소스)</li>
        <li>alt: string (대체 텍스트)</li>
        <li>onClick?: (event?: React.MouseEvent&lt;HTMLElement&gt;) =&gt; void - (onClick 함수)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default IconIntro;
