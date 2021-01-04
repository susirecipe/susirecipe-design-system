import React from 'react';
import { IntroduceContainer, ImageWarpper, IntroduceComment } from './Introduce.styled';

const Introduce: React.FC = () => {
  return (
    <IntroduceContainer>
      <ImageWarpper>
        <img src={process.env.PUBLIC_URL + '/asset/logo2.png'} alt="logo" />
      </ImageWarpper>
      <IntroduceComment>
        <h1>안녕하세요 디자이너팀과 개발팀을 위한</h1>
        <h1>수시레시피 디자인 시스템 문서입니다</h1>
        <br />
        <br />
        <p>저희는 가장 합리적인 업무 체계를 위하여 고민했고, 디자어너와 개발자가 가장 효율적인</p>
        <p>업무를 할 수 있는 시스템을 찾았습니다.</p>
        <p>바로 'atomic design' 입니다. 저희는 리액트로 개발하기에 재사용 가능한 컴포넌트를 활용하고자 했고</p>
        <p>여러 원자로 나누어서 그것들을 합쳐가며 디자인을 하기로 했습니다.</p>
        <p>참고 - <a href="https://velog.io/@thsoon/쓸때없이-고퀄인-투두리스트-만들기-FE-2.-뷰-설계" target="_blank" rel="noreferrer">Todo List로 atomic design 배우기</a></p>
        <p>참고 - <a href="https://tech.socarcorp.kr/design/2020/07/31/component-01.html" target="_blank" rel="noreferrer">SOCAR 컴포넌트 디자인 방식</a></p>
        <br />
        <br />
        <h2>atoms</h2>
        <br />
        <p>atoms는 원자입니다. 디자인 시스템의 가장 기초가되는 컴포넌트라고 할 수 있습니다. </p>
        <p>atoms에는 개발 단계에서 가장 기초가되는 HTML Tag를 기준으로 합니다. 보통 예를 들면 'input tag', 'button tag'를 예로 들 수 있겠죠?</p>
        <p>이런 atom들을 가지고 미리 디자인과 컴포넌트 기능을 설계합니다.</p>
        <p>디자이너들은 다양한 종류의 컴포넌트 디자인을, 개발자는 컴포넌트가 가지능 기능, 즉 React에서는 Props같은 것 들을 설계할 수 있습니다.</p>
        <p>다양하게 만들어진 atoms를 가지고 우리는 좀 더 큰 단위인 molecules(분자)를 만들겁니다.</p>
        <br />
        <br />
        <h2>molecules</h2>
        <br />
        <p>분자는 원자들이 결합한 결과물로 나타납니다. 우리는 React를 쓰기 때문에 다양한 원자들을 결합시킨 분자를 컴포넌트화 시킬 수 있습니다.</p>
        <p>분자 또한 마찬가지로 디자인과 컴포넌트 기능을 설계합니다.</p>
        <p>최대한 기존의 설계된 원자를 재사용하는 것을 목표로 하고 필요에 의해 새로 만들기도 합니다.</p>
        <p>당연한 이야기지만 분자들을 합쳐 페이지 템플릿의 주축이 될 organisms(유기체)를 만듭니다.</p>
        <br />
        <br />
        <h2>organisms</h2>
        <br />
        <p>컴포넌트 단위의 최종 결정물인 유기체입니다.</p>
        <p>이 컴포넌트들을 간단한 예로 들면 웹의 header나 footer, hambergbar, article등 페이지 템플릿에 직접적으로 들어간 요소들 입니다.</p>
        <p>우리는 설계를 하면서 페이지에 들어갈 모든 유기체를 만드는 것은 불가능하다고 생각했습니다.</p>
        <p>하지만 자주쓰이는 header나 footer같은 경우는 재사용될 가능성이 크기 때문에 이러한 컴포넌트는 미리 설계를 해놓기로 했습니다.</p>
        <p>물론 기능이 많이 들어가는 컴포넌트도 로직의 분리를 위해서 미리 설계해놓았습니다.</p>
        <br />
        <br />
      </IntroduceComment>
    </IntroduceContainer>
  );
};

export default Introduce;
