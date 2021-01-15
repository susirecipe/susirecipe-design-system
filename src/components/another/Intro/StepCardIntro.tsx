import React from 'react';
import styled from 'styled-components';
import {
  IntroContainer,
  IntroSmallHeader,
  IntroParagraph,
  ComponentWrapper,
  PropsTable,
  MarginBox,
  CodeBox,
  ListBox,
} from './global-intro.styled';
import StepCard from 'components/molecules/StepCard/StepCard';

const StyledSampleContent = styled.div`
  display: flex;

  img {
    width: 100px;
    height: 100px;
    margin: 0 40px;
  }

  h1 {
    margin-bottom: 15px;
    font-weight: 900;
    font-size: 1.725rem;
    color: #e2ce38;
  }

  p {
    margin-bottom: 10px;
    font-size: 1.1rem;
    color: #333;
  }
`;

const StepCardIntro: React.FC = () => {
  const sampleJSX = (
    <StyledSampleContent>
      <img src={process.env.PUBLIC_URL + '/asset/step_sample_icon.png'} alt="step-icon" />
      <div>
        <h1>과제수행</h1>
        <p>제공받은 커리큘럼을 바탕으로 학생 맞춤형</p>
        <p>과제를 과제 및 활동을 수행합니다</p>
      </div>
    </StyledSampleContent>
  );

  return (
    <IntroContainer>
      <IntroParagraph>
        스텝카드는 단계를 보여주는 카드입니다. 프로그램이나 행사의 단계를 보여줄 때 효과적이라 생각하여 설계하게
        되었습니다. <br />
        카드와 비슷한 부분이 많지만 헤드와 내용의 배치가 다르므로 따로 제작의 필요성을 느꼈습니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <StepCard header="1단계">{sampleJSX}</StepCard>
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
            <td>높이</td>
            <td>내용</td>
            <td></td>
          </tr>
          <tr>
            <td>넓이</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>배경색</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </PropsTable>
      <MarginBox margin={80} />

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        헤더는 글이 들어가야하지만 메인내용에는 어떠한 것이 들어와도 상관없습니다. <br />
        예른들어 헤더에는 '1단계' 등 글씨만 들어가지만{' '}
        <b>메인 내용에는 어떠한 디자인이 들어간 콘텐츠가 들어오는 것을 허용</b>합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>&lt;StepCard header="1단계"&gt;&#123;sampleJSX&#125;&lt;/StepCard&gt;</code>
      </CodeBox>
      <ListBox>
        <li>header: string (헤더에 쓰일 내용)</li>
        <li>sampleJSX: React.ReactNode (내용 안에 들어갈 JSX)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default StepCardIntro;
