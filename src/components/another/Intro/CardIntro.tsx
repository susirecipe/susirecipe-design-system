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
import Card from 'components/molecules/Card/Card';

const CardIntro: React.FC = () => {
  const [inputs, setInputs] = useState({
    width: '260',
    height: '300',
    headerColor: '#6b6b6b',
  });

  const hadnleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };
  return (
    <IntroContainer>
      <IntroParagraph>
        카드는 정보를 단위로 나누어 시각화로 보여준다는 장점이 있는 컴포넌트입니다. <br />
        여러 모양의 카드를 사용할 때도 있지만 자주 쓰이는 카드 형태의 컴포넌트를 하나는 만들어 놓는 것이 좋겠다는 생각에
        제작하게 되었습니다. <br />
        또한 내용의 가변성을 유의하여 조금더 유연한 컴포넌트가 되는데에 집중하여 제작하였습니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <Card width={`${inputs.width}px`} height={`${inputs.height}px`} header="카드" headerColor={inputs.headerColor}>
          <p>카드입니다</p>
          <p>카드에 들어갈</p>
          <p>내용을 입력하세요</p>
        </Card>
      </ComponentWrapper>
      <ControlBox>
        <div>
          넓이:{' '}
          <input type="range" name="width" value={inputs.width} min="200" max="600" step="10" onChange={hadnleInput} />
        </div>
        <div>
          높이:{' '}
          <input
            type="range"
            name="height"
            value={inputs.height}
            min="100"
            max="400"
            step="10"
            onChange={hadnleInput}
          />
        </div>
        <div>
          헤드 색: <input type="color" name="headerColor" value={inputs.headerColor} onChange={hadnleInput} />
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
            <td>글자 색</td>
            <td>헤드 색</td>
            <td></td>
          </tr>
          <tr>
            <td>내용 색</td>
            <td>높이</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>넓이</td>
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
        헤더에는 글씨밖에 입력할 수 없습니다. 하지만 <b>내용에는 그림, 문단 등 다양하게 아무것</b>이나 들어갈 수
        있습니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>
          &lt;Card width=&#123;"260px"&#125; height=&#123;"300px"&#125; headerColor="#6b6b6b"
          onClick=&#123;clickMethod&#125;&gt;&#123;children&#125;&lt;/Card&gt;
        </code>
      </CodeBox>
      <ListBox>
        <li>width: string (카드의 넓이 '%, px 등등 여러단위 가능')</li>
        <li>height: string (카드의 높이 '%, px 등등 여러단위 가능')</li>
        <li>headerColor?: string - (헤더의 색깔)</li>
        <li>children?: React.ReactNode - (내용에 들어갈 JSX)</li>
        <li>onClick?: (event?: React.MouseEvent&lt;HTMLElement&gt;) =&gt; void - (onClick 함수)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default CardIntro;
