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
} from './global-intro.styled';
import Underline from 'components/atoms/Underline/Underline';

const UnderlineIntro: React.FC = () => {
  const [input, setInput] = useState('안녕하세요');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
  };
  return (
    <IntroContainer>
      <IntroParagraph>
        이 컴포넌트는 특별히 대중적으로 쓰이는 재사용을 위한 것이 아닙니다. 단지 수시레시피 기존 홈페이지 컴포넌트에서
        자주쓰이기에 컴포넌트화를 진행하기로 하였습니다. <br />
        특별한 개발 기능은 없고 디자인적 요소가 기본을 이룹니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <Underline>{input}</Underline>
      </ComponentWrapper>
      <ControlBox>
        <input type="text" value={input} placeholder="값을 입력해주세요" onChange={handleInput} />
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
            <td>밑줄 색</td>
            <td>내용</td>
            <td></td>
          </tr>
        </tbody>
      </PropsTable>
      <MarginBox margin={80} />

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        컴포넌트가 블럭형태가 아닌 인라인형태라는 것을 유의해야합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>
          &lt;Underline&gt;&lt;/Underline&gt;
        </code>
      </CodeBox>
    </IntroContainer>
  );
};

export default UnderlineIntro;
