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
import EventInfoCard, { row } from 'components/molecules/EventInfoCard/EventInfoCard';

const EventInfoCardIntro: React.FC = () => {
  const [eventRows, setEventRows] = useState<Array<row>>([
    {
      tab: '대상',
      content: <div>고1~3학년 학생</div>,
    },
    {
      tab: '기간',
      content: <div>2021. 01. 01. ~ 2021. 09. 01.</div>,
    },
    {
      tab: '장소',
      content: <div>강남대로</div>,
    },
  ]);
  const [inputs, setInputs] = useState({
    tab: '',
    content: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newRow: row = {
      tab: inputs.tab,
      content: inputs.content,
    };
    setEventRows([...eventRows, newRow]);
    setInputs({ tab: '', content: '' });
  };

  const handleInput = (evnet: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evnet.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <IntroContainer>
      <IntroParagraph>
        이벤트인포카드는 주로 행사나 이벤트가 있을 때 일정이나 내용을 간략히 알려주는 카드입니다. <br />
        보통 페이지 상단에 위치하여 장소, 일정 등을 소개해주는 역할을 지닌 컴포넌트입니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <EventInfoCard rows={eventRows} />
      </ComponentWrapper>
      <ControlBox>
        <form onSubmit={handleSubmit}>
          탭:{' '}
          <input
            type="text"
            name="tab"
            value={inputs.tab}
            placeholder="탭을 입력해주세요"
            required
            onChange={handleInput}
          />{' '}
          내용:{' '}
          <input
            type="text"
            name="content"
            value={inputs.content}
            placeholder="내용을 입력해주세요"
            required
            onChange={handleInput}
          />{' '}
          <input type="submit" value="한 줄 추가" />
        </form>
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
            <td>탭 크기</td>
            <td>탭 개수</td>
            <td></td>
          </tr>
          <tr>
            <td>탭 색깔</td>
            <td>내용</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>넓이</td>
            <td></td>
          </tr>
        </tbody>
      </PropsTable>
      <MarginBox margin={80} />

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        이벤트인포카드는 넓이가 가변요소로 되어있지만 <b>풀사이즈</b>입니다. 따라서 디자인하실때 기준을 하나 잡으시고
        양끝에 맞게 배치해주셔야 합니다. <br />
        개발할 때는 탭 한 줄 당 주어진 객체 속성에 맞추어주셔야합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>&lt;EventInfoCard rows=&#123;eventRows&#125; /&gt;</code>
      </CodeBox>
      <ListBox>
        <li>
          rows: Array&lt;&#123; tab: string; content: React.ReactNode; &#125;&gt; (탭과 내용이 담긴 객체의 배열)
        </li>
      </ListBox>
    </IntroContainer>
  );
};

export default EventInfoCardIntro;
