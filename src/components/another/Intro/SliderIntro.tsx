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
import Slider from 'components/organisms/Slider/Slider';
import Card from 'components/molecules/Card/Card';

const SliderIntro: React.FC = () => {
  const [inputs, setInputs] = useState({
    slideNum: window.innerWidth < 1025 ? '1' : '2',
  });

  const SampleJSXArray: Array<React.ReactNode> = [
    <Card width="100%" height="200px" header="test">
      1
    </Card>,
    <Card width="100%" height="200px" header="test">
      2
    </Card>,
    <Card width="100%" height="200px" header="test">
      3
    </Card>,
    <Card width="100%" height="200px" header="test">
      4
    </Card>,
  ];

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <IntroContainer>
      <IntroParagraph>
        슬라이더는 굉장히 많은 기능이 들어가있는 컴포넌트입니다. 따라서 우리는 라이브러리를 쓰기로 했고 가장 유명한
        리액트 슬라이더 라이브러리인 'react-slick'을 활용하여 제작하였습니다. <br />
        슬라이더는 후기나 사례등을 나열하기 좋습니다. 수시레시피 이용 후기나 대학 합격 사례등을 나열할 때 사용합니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <Slider slideCards={SampleJSXArray} slidesToShow={parseInt(inputs.slideNum)} />
      </ComponentWrapper>
      <ControlBox>
        슬라이드 개수:{' '}
        <input
          type="range"
          name="slideNum"
          value={inputs.slideNum}
          placeholder="값을 입력해주세요"
          min="1"
          max="4"
          onChange={handleInput}
        />
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
            <td></td>
            <td>슬라이드 내용</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>슬라이드 개수</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>자동 넘기기</td>
            <td></td>
          </tr>
        </tbody>
      </PropsTable>
      <MarginBox margin={80} />

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        위의 예시에는 기존에 제작한 카드 분자를 사용했지만 <b>다양한 슬라이드카드 디자인이 가능합니다.</b> 예시의 형태에
        얽메여 디자인할 필요가 없습니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>
          &lt;Slider slideCards=&#123;SampleJSXArray&#125; slideToShow=&#123;2&#125; autoplay=&#123;true&#125; /&gt;
        </code>
      </CodeBox>
      <ListBox>
        <li>slideCards: Array&lt;React.ReactNode&gt; (슬라이드 카드 내용이 들어갈 배열)</li>
        <li>slideToShow?: number (한 번에 보여지는 슬라이드 개수, 기본 2개)</li>
        <li>autoplay?: string (자동 넘기기 기능, 기본 활성화)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default SliderIntro;
