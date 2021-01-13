import React, { useState } from 'react';
import {
  IntroContainer,
  IntroParagraph,
  IntroSmallHeader,
  ComponentWrapper,
  ControlBox,
  MarginBox,
  PropsTable,
  CodeBox,
  ListBox,
} from './global-intro.styled';
import Subtitle from 'components/molecules/Subtitle/Subtitle';

const SubtitleIntro: React.FC = () => {
  const [input, setInput] = useState('안녕하세요');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
  };

  return (
    <IntroContainer>
      <IntroParagraph>
        서브타이틀은 한국말로 자막이라는 뜻입니다. 말그대로 이미지나 섹션에서 자막처럼 반투명한 박스를 넣고 싶을때
        사용되는 컴포넌트입니다. <br />이 컴포넌트는 분자모양으로 서브타이틀 박스 안에는 어떠한 컴포넌트도 올 수 있게
        설계하여 다양한 디자인이 가능합니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <div style={{ width: 500, position: 'relative' }}>
          <img style={{ width: '100%' }} src={process.env.PUBLIC_URL + '/asset/logo.png'} alt="" />
          <Subtitle>{input}</Subtitle>
        </div>
      </ComponentWrapper>
      <ControlBox>
        <input type="text" placeholder="값을 입력해주세요" value={input} onChange={handleInput} />
      </ControlBox>
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
            <td>배경색</td>
            <td>넓이</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>높이</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>내용</td>
            <td></td>
          </tr>
        </tbody>
      </PropsTable>
      <MarginBox margin={80} />

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        서브타이틀은 넓이가 가변요소로 되어있지만 <b>풀사이즈</b>입니다. 따라서 디자인하실때 기준을 하나 잡으시고 양끝에
        맞게 배치해주셔야 합니다. <br />
        개발할 때도 wrapper같은 블럭속성으로 감싸서 사용해주셔야합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>&lt;Subtitle&gt;&#123;children&#125;&lt;/Subtitle&gt;</code>
      </CodeBox>
      <ListBox>
        <li>children: React.ReactNode (서브타이틀 안에 들어갈 컴포넌트)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default SubtitleIntro;
