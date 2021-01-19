import React from 'react';
import {
  IntroContainer,
  IntroParagraph,
  IntroSmallHeader,
  ComponentWrapper,
  MarginBox,
  PropsTable,
  CodeBox,
} from './global-intro.styled';
import Footer from 'components/organisms/Footer/Footer';

const FooterIntro: React.FC = () => {
  return (
    <IntroContainer>
      <IntroParagraph>
        푸터는 웹의 제일 하단에 위치하는 컴포넌트입니다. 주로 웹사이트의 정보나 링크, 저작권 등이 기재되있으며 빠질 수
        없는 요소입니다. <br />
        대부분의 페이지 하단에 들어가므로 자주 쓰일 일이 다분하여 제작하게 되었습니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <Footer />
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
            <td>배경 색</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>글자색</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>내용</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </PropsTable>
      <MarginBox margin={80} />

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        가장중요한 것은 <b>푸터는 변경될 요소가 없다</b>는 것입니다. 내용이나 아이콘의 변경을 원하면 개발자에게 문의해야합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>&lt;Footer /&gt;</code>
      </CodeBox>
    </IntroContainer>
  );
};

export default FooterIntro;
