import React from 'react';
import { useDispatch } from 'react-redux';
import {
  IntroContainer,
  IntroParagraph,
  IntroSmallHeader,
  ComponentWrapper,
  MarginBox,
  CodeBox,
  ListBox,
} from './global-intro.styled';
import { modalOpen } from 'actions/modal';
import Modal from 'components/organisms/Modal/Modal';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';

const StyledSampleJSX = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 2rem;
    color: #4284bd;
  }

  p {
    margin-bottom: 10px;
    line-height: 1.4;
    font-size: 1rem;
    color: #374553;
  }

  img {
    width: 70px;
    margin-bottom: 20px;
  }
`;

const ModalIntro: React.FC = () => {
  const dispatch = useDispatch();

  const sampleJSX = (
    <StyledSampleJSX>
      <h1>모달 예시입니다.</h1>
      <p>이곳에 모달의 내용을 적으시면 됩니다.</p>
      <p>
        jsx로 값을 넘겨줄 수 있기 때문에 매우 자유로운 디자인이 가능합니다. 모달 안의 내용은 자유롭게 디자인하셔도
        됩니다.
      </p>
      <img src={process.env.PUBLIC_URL + "/asset/step_sample_icon.png"} alt="sample_image"/>
      <p>이렇게 사진도 마음대로 넣을 수 있습니다.</p>
    </StyledSampleJSX>
  );

  const hadnleModal = () => {
    dispatch(modalOpen());
  };

  return (
    <IntroContainer>
      <IntroParagraph>
        모달은 어떠한 웹사이트에서도 빠짐없이 등장하는 요소입니다. 따라서 우리는 모달을 컴포넌트화 하기로 했습니다.{' '}
        <br />
        모달은 주로 정보를 분리하여 보여주거나 따로 특장한 입력 값을 받을 때 사용됩니다. <br />
        우리는 주로 버튼이나 특정 조건 시에 전체화면으로 모달을 보여주기로 설계하였고 모달 밖의 공간을 클릭하면 모달이
        닫히도록 하였습니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <Modal>{sampleJSX}</Modal>
        <Button width="130px" height="40px" onClick={hadnleModal}>
          모달 열기
        </Button>
      </ComponentWrapper>
      <MarginBox margin={40} />

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        모바일과 웹에서의 모달 크기가 다르므로 모달 안의 내용을 디자인할 때 유의하여 디자인해야합니다. <br />
        개발에 있어서는 <b>리덕스로 모달을 온오프</b> 할 수 있으므로 유의하여 개발하여야합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>&lt;Modal&gt;&#123;children&#125;&lt;/Modal&gt;</code>
      </CodeBox>
      <ListBox>
        <li>children: React.ReactNode (모달 내용)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default ModalIntro;
