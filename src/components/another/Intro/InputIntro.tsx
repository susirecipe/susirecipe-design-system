import React, { useState } from 'react';
import {
  IntroContainer,
  IntroParagraph,
  IntroSmallHeader,
  ComponentWrapper,
  MarginBox,
  ControlBox,
  PropsTable,
  CodeBox,
  ListBox,
} from './global-intro.styled';
import { TextInput, EmailInput, PasswordInput, NumberInput } from 'components/atoms/Input/Input';

const InputIntro: React.FC = () => {
  const [overviewInput, setOverviewInput] = useState({
    textWhiteInput: '',
    textBlackInput: '',
  });

  const [inputs, setInputs] = useState({
    width: '200',
  });

  const handleOverviewInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setOverviewInput({ ...overviewInput, [name]: value });
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const hndleFakeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    return;
  };

  return (
    <IntroContainer>
      <IntroParagraph>
        인풋은 고객의 정보를 담고 전달해주는 컴포넌트로 매우 중요하고 로직이 복잡합니다. <br />
        많은 기능들이 들어간 만큼 문서를 깊이 보고 이해하는 것을 추천드립니다. <br />
        인풋은 다양한 상황에서 디자인의 변화가 일어나므로 다양한 디자인을 제작해야 했습니다. 그에 따라 개발도 다양하게
        이루어져야 했습니다. <br />
        그래서 우리는 텍스트, 이메일, 비밀번호 등 다양한 형태의 인풋컴포넌트를 제작하기로 했습니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper blackBG>
        <TextInput
          width={`${inputs.width}px`}
          value={overviewInput.textWhiteInput}
          name="textWhiteInput"
          placeholder="값을 입력해주세요"
          onChange={handleOverviewInput}
        />
        <MarginBox margin={20} />
        <TextInput
          width={`${inputs.width}px`}
          value={overviewInput.textBlackInput}
          name="textBlackInput"
          placeholder="값을 입력해주세요"
          black
          onChange={handleOverviewInput}
        />
      </ComponentWrapper>
      <ControlBox>
        <div>
          넓이:{' '}
          <input
            type="range"
            name="width"
            placeholder="ex) 150px"
            value={inputs.width}
            min="100"
            max="500"
            step="10"
            onChange={handleInput}
          />
        </div>
        <MarginBox margin={20} />
        <div>
          현재 변수에 저장되는 인풋 값(하양): <b>{overviewInput.textWhiteInput}</b>
        </div>
        <MarginBox margin={20} />
        <div>
          현재 변수에 저장되는 인풋 값(검정): <b>{overviewInput.textBlackInput}</b>
        </div>
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
            <td>높이</td>
            <td>넓이</td>
            <td>배경색(하양, 검정)</td>
          </tr>
          <tr>
            <td>글자 크기</td>
            <td>플레이스홀더</td>
            <td>인풋 타입(텍스트, 이메일, 등등...)</td>
          </tr>
        </tbody>
      </PropsTable>

      <IntroSmallHeader>Types</IntroSmallHeader>
      <ComponentWrapper blackBG>
        텍스트
        <TextInput width="200px" value="텍스트" name="text" onChange={hndleFakeInput} />
        <MarginBox margin={20} />
        이메일
        <EmailInput width="200px" value="email@email.com" name="email" onChange={hndleFakeInput} />
        <MarginBox margin={20} />
        비밀번호
        <PasswordInput width="200px" value="password" name="password" onChange={hndleFakeInput} />
        <MarginBox margin={20} />
        숫자
        <NumberInput width="200px" value="15" name="number" onChange={hndleFakeInput} />
        <MarginBox margin={20} />
        읽기전용
        <TextInput width="200px" value="읽기전용" name="text" readOnly onChange={hndleFakeInput} />
      </ComponentWrapper>
      <MarginBox margin={60} />

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        주의해야할 부분은 <b>넓이는 가변요소이지만 높이는 고정요소</b>이기 때문에 디자인할 때 주의해야합니다. <br />
        또한 인풋 타입이 여러개이므로 상황에 맞는 인풋을 골라 적절하게 사용하는 것은 굉장히 중요합니다. <br />
        개발자들은 인풋의 <b>'name'</b>에 신경써서 디바이스의 자동완성 기능을 활용할 수 있도록 신경써야 합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>
          &lt;TextInput /&gt;&nbsp;&lt;EmailInput /&gt;&nbsp;&lt;PasswordInput /&gt;&nbsp;&lt;NumberInput /&gt;
          <br />
          <br />
          &lt;TextInput <br />
          &nbsp;&nbsp;width=&#123;"200px"&#125; <br />
          &nbsp;&nbsp;value=&#123;inputState&#125; <br />
          &nbsp;&nbsp;name="text" <br />
          &nbsp;&nbsp;placeholder="값을 입력하세요" <br />
          &nbsp;&nbsp;required <br />
          &nbsp;&nbsp;miLength=&#123;5&#125; <br />
          &nbsp;&nbsp;maxLength=&#123;10&#125; <br />
          &nbsp;&nbsp;readonly <br />
          &nbsp;&nbsp;black <br />
          &nbsp;&nbsp;onChange=&#123;handleMethod&#125; <br />
          /&gt;
        </code>
      </CodeBox>
      <ListBox>
        <li>width: string (인풋의 넓이 '%, px 등등 여러단위 가능')</li>
        <li>value: string (인풋의 값)</li>
        <li>name: string ('email, phone, birthday' 등으로 자동완성 가능)</li>
        <li>placeholder?: string (인풋이 비어있을 때 보여지는 글자)</li>
        <li>required?: boolean (필수 입력)</li>
        <li>minLength?: number (최소 글자수)</li>
        <li>maxLength?: number (최대 글자수)</li>
        <li>readOnly?: boolean (읽기 전용 활성화)</li>
        <li>black?: boolean (검정테마 인풋 사용)</li>
        <li>onChange: (event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void (onChange 함수)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default InputIntro;
