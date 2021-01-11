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
import { LargeHeader, SmallHeader } from 'components/atoms/Header/Header';

interface BtnActive {
  black: boolean;
  white: boolean;
  brand: boolean;
  point: boolean;
}

const HeaderIntro: React.FC = () => {
  const initialBtnActive: BtnActive = {
    black: false,
    white: false,
    brand: false,
    point: false,
  };

  const [btnActive, setBtnActive] = useState<BtnActive>({ ...initialBtnActive, black: true });
  const [btnColor, setBtnColor] = useState('black');
  const [inputs, setInputs] = useState({
    content: '안녕하세요',
  });

  const handleHeaderColor = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;
    setBtnActive({ ...initialBtnActive, [id]: true });
    setBtnColor(id);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <IntroContainer>
      <IntroParagraph>
        헤더는 가장 심플한 컴포넌트입니다. 굳이 컴포넌트화 시키지않고 단순히 HTML로 작업해도 된다고 생각하겠지만 <br />
        충분히 재사용될 가능성이 많고 원활한 디자인 시스템을 적용하려면 컴포넌트화를 해야한다고 생각하였습니다. <br />
        따라서 개발쪽으로 많은 기능은 들어가있지않고 디자인 요소들의 비중이 큽니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper blackBG={btnActive.white}>
        <LargeHeader color={btnColor}>{inputs.content}</LargeHeader>
        <SmallHeader color={btnColor}>{inputs.content}</SmallHeader>
      </ComponentWrapper>
      <ControlBox>
        <input
          type="text"
          name="content"
          value={inputs.content}
          placeholder="값을 입력해주세요"
          onChange={handleInput}
        />
      </ControlBox>
      <ControlBox direction="row">
        <button id="black" className={btnActive.black ? 'active' : ''} onClick={handleHeaderColor}>
          블랙
        </button>
        <button id="white" className={btnActive.white ? 'active' : ''} onClick={handleHeaderColor}>
          화이트
        </button>
        <button id="brand" className={btnActive.brand ? 'active' : ''} onClick={handleHeaderColor}>
          브랜드
        </button>
        <button id="point" className={btnActive.point ? 'active' : ''} onClick={handleHeaderColor}>
          포인트
        </button>
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
            <td>내용</td>
            <td>글자색 (검정, 하양, 브랜드, 포인트)</td>
          </tr>
          <tr>
            <td></td>
            <td>폰트</td>
            <td>글자크기 (large, small)</td>
          </tr>
        </tbody>
      </PropsTable>

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        헤더에서는 딱히 주의해야할 점은 없습니다. <br />
        다만 지정요소로 크기가 정해져 있기때문에 상황에 맞게 적절히 사용해주어야 합니다. <br />
        그리고 개발단계에서 컬러를 지정할때 미리 정해놓은 enum을 사용해주어야 합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>
          &lt;LargeHeader&gt;&lt;/LargeHeader&gt; <br />
          &lt;SmallHeader color=&quot;brand&quot;&gt;&lt;/SmallHeader&gt;
        </code>
      </CodeBox>
      <ListBox>
        <li>color?: string (글자색 'black', 'white', 'brand', 'point')</li>
      </ListBox>
    </IntroContainer>
  );
};

export default HeaderIntro;
