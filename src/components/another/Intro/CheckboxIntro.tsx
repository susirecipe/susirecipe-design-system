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
import Checkbox from 'components/atoms/Checkbox/Checkbox';

const CheckboxIntro: React.FC = () => {
  const [checks, setChecks] = useState({
    check1: false,
    check2: false,
  });

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setChecks({ ...checks, [id]: checked });
  };
  return (
    <IntroContainer>
      <IntroParagraph>
        체크박스는 인풋계열에 있어서 필수적인 요소입니다. <br />
        고객들이 저희가 원하는 대답을 할 보장이 없기때문에 선택적인 답변을 받기 위해서 꼭 필요합니다. <br />
        개발자는 기존 인풋 체크박스와 다르게 접근하기 때문에 유심히 볼 필요가 있습니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <label>체크박스1 </label>
        <br />
        <Checkbox id="check1" checked={checks.check1} onChange={handleChecked} />
        <br />
        <br />
        <label>체크박스2 </label>
        <br />
        <Checkbox id="check2" checked={checks.check2} onChange={handleChecked} />
      </ComponentWrapper>
      <ControlBox>
        체크박스 1: {checks.check1 ? '체크됨' : '체크 안됨'}
        <br />
        <br />
        체크박스 2: {checks.check2 ? '체크됨' : '체크 안됨'}
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
            <td>체크 여부</td>
            <td></td>
          </tr>
        </tbody>
      </PropsTable>

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        개발적으로 주의할 점이 몇개 있습니다. 우선 체크박스의 'v'자 모양은 이미지로 구현되었기에 이미지 url을 정해진
        위치와 이름을 가지고있어야 합니다. <br />
        위치는 public폴더에 asset폴더 안에 있어야하고 이름은 'checked.png', 'non-check.png' 이여야 합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>&lt;Checkbox id="check1" checked=&#123;checked&#125; onChange=&#123;changeMethod&#125; /&gt;</CodeBox>
      <ListBox>
        <li>id: string (아이디 값, 필수적으로 들어가야함)</li>
        <li>checked: boolean (체크 여부)</li>
        <li>onChange: (event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void; (onChange 함수)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default CheckboxIntro;
