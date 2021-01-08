import React, { useState } from 'react';
import {
  IntroContainer,
  IntroSmallHeader,
  IntroParagraph,
  ComponentWrapper,
  ControlBox,
  PropsTable,
  MarginBox,
  CodeBox,
  ListBox,
} from './global-intro.styled';
import Button from 'components/atoms/Button/Button';

const ButtonIntro: React.FC = () => {
  const [inputs, setInputs] = useState({
    width: '250',
    height: '50',
    content: '안녕하세요',
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    switch (name) {
      case 'width':
        setInputs({ ...inputs, width: value });
        return;
      case 'height':
        setInputs({ ...inputs, height: value });
        return;
      case 'content':
        setInputs({ ...inputs, content: value });
        return;
      default:
        return;
    }
  };

  const onButtonClick = () => {
    alert('버튼을 클릭하셨습니다');
  };

  return (
    <IntroContainer>
      <IntroParagraph>
        버튼은 atoms에 있어서 가장 중요하고 기본이되는 컴포넌트입니다. <br />
        사실 그만큼 기능들도 많이 들어가있고 복잡하게 고려해야 할 요소들이 많습니다. <br />
        우선 우리는 디자인팀과 개발팀의 협의로 영업팀의 요구에 맞는 결과물을 위하여 유연한 컴포넌트로 만들기로 했습니다.{' '}
        <br />
        버튼은 아주 많이 쓰이는 컴포넌트인 만큼 변화되는 부분도 많고 대처해야 할 부분이 많을 것입니다. <br />
        그래서 저희는 이 이슈에 맞춰 설계하게 되었습니다. <br />
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <Button width={`${inputs.width}px`} height={`${inputs.height}px`} onClick={onButtonClick}>
          {inputs.content}
        </Button>
      </ComponentWrapper>
      <ControlBox>
        <div>
          넓이:{' '}
          <input type="range" name="width" value={inputs.width} min="100" max="500" step="10" onChange={handleInput} />
        </div>
        <div>
          높이:{' '}
          <input type="range" name="height" value={inputs.height} min="50" max="150" step="5" onChange={handleInput} />
        </div>
        <div>
          내용:{' '}
          <input
            type="text"
            name="content"
            placeholder="내용을 써주세요"
            value={inputs.content}
            onChange={handleInput}
          />
        </div>
      </ControlBox>

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
            <td>넓이</td>
            <td></td>
          </tr>
          <tr>
            <td>글자 크기</td>
            <td>높이</td>
            <td></td>
          </tr>
          <tr>
            <td>그림자</td>
            <td>내용</td>
            <td></td>
          </tr>
        </tbody>
      </PropsTable>

      <IntroSmallHeader>Types</IntroSmallHeader>
      <ComponentWrapper>
        <Button width="200px" height="60px">
          기본 버튼
        </Button>
        <MarginBox margin={25} />
        <Button width="200px" height="60px" disabled>
          막힌 버튼
        </Button>
        <MarginBox margin={25} />
        <Button width="200px" height="60px" isLoading>
          로딩 버튼
        </Button>
        <MarginBox margin={25} />
        <Button width="200px" height="60px" disabled isLoading>
          막힌 로딩 버튼
        </Button>
      </ComponentWrapper>
      <MarginBox margin={80} />

      <IntroSmallHeader>Waning</IntroSmallHeader>
      <IntroParagraph>
        주의할 점은 디자인의 통일성을 위해 배경색은 <b>옐로우계열의 컬러로 통일</b>하였다는 것과 폰트와 색깔또한
        통일하였다는 것입니다.
        <br />
        또한 다양한 기획의견을 반영하여 넓이와 높이를 가변요소로 두어 <b>여러 크기의 버튼을 제작</b>할 수 있다는 것을
        염두하여야 합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>
          &lt;Button width=&#123;"150px"&#125; height=&#123;"70px"&#125; disabled isLoading
          onClick=&#123;clickMethod&#125;&gt;&lt;/Button&gt;
        </code>
      </CodeBox>
      <ListBox>
        <li>width: string (버튼의 넓이 '%, px 등등 여러단위 가능')</li>
        <li>height: string (버튼의 높이 '%, px 등등 여러단위 가능')</li>
        <li>disabled?: boolean - (disable버튼 활성화)</li>
        <li>isLoading?: boolean - (loading버튼 활성화)</li>
        <li>onClick?: (event?: React.MouseEvent&lt;HTMLElement&gt;) =&gt; void - (onClick 함수)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default ButtonIntro;
