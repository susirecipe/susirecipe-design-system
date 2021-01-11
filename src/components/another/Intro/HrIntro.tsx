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
import Hr from 'components/atoms/Hr/Hr';

const HrIntro: React.FC = () => {
  return (
    <IntroContainer>
      <IntroParagraph>
        hr은 한국말로 구분선이란 의미를 가집니다. 단락을 나눌 때나 내용을 분리시킬 때 사용합니다. <br />
        단순히 선의 역할만 하기 때문에 특별한 역할은 없습니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <Hr />
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
            <td>두께</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>선 색</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </PropsTable>

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>넓이가 풀사이즈이기 때문에 wrapper로 감싼후에 사용해야 적절한 효과를 볼 수 있습니다.</IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>&lt;Hr /&gt;</code>
      </CodeBox>
      <ListBox></ListBox>
    </IntroContainer>
  );
};

export default HrIntro;
