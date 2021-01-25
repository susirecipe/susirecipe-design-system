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
import ConsultantCard from 'components/molecules/ConsultantCard/ConsultantCard';

const ConsultantCardIntro: React.FC = () => {
  const [consultantInfo, setConsultantInfo] = useState({
    name: '김준호',
    position: '수시레시피 대표',
    career: [
      '수시레시피 대표',
      '학생부종합전형 그룹 컨설팅',
      '대치, 목동, 노원, 경기 등 입시설명회 50회 개최',
      '에듀진<명문대 합경생 학생부 대공개> 공동집필',
      '4-5등급 전문 컨설팅 및 상당 합격 보유',
    ],
    profileImgSrc: process.env.PUBLIC_URL + '/asset/profile_img.png',
  });
  const [newCareer, setNewCareer] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setConsultantInfo({ ...consultantInfo, [name]: value });
  };

  const hadnleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setConsultantInfo({ ...consultantInfo, career: [...consultantInfo.career, newCareer] });
    setNewCareer('');
  };

  const handleCareer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewCareer(value);
  };

  return (
    <IntroContainer>
      <IntroParagraph>
        컨설턴트카드는 다른 웹에서는 자주 쓰이는 컴포넌트는 아닙니다. 하지만 저희 수시레시피에서는 사용될 여지가 많이
        있어서 따로 컴포넌트화를 해야겠다고 생각했습니다. <br />이 컴포넌트는 인물에 대한 정보가 들어가는
        컴포넌트입니다. 프로필사진과 직책, 이력 등이 들어가게됩니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <ConsultantCard
          name={consultantInfo.name}
          position={consultantInfo.position}
          career={consultantInfo.career}
          profileImgSrc={consultantInfo.profileImgSrc}
        />
      </ComponentWrapper>
      <ControlBox>
        이름:{' '}
        <input
          type="text"
          name="name"
          value={consultantInfo.name}
          placeholder="값을 입력해주세요"
          onChange={handleInput}
        />
        직책:{' '}
        <input
          type="text"
          name="position"
          value={consultantInfo.position}
          placeholder="값을 입력해주세요"
          onChange={handleInput}
        />
        <form onSubmit={hadnleSubmit}>
          경력 추가: <input type="text" value={newCareer} placeholder="값을 입력해주세요" onChange={handleCareer} />
          <input type="submit" value="추가" />
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
            <td>넓이</td>
            <td>프로필 사진</td>
            <td></td>
          </tr>
          <tr>
            <td>높이</td>
            <td>이름</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>직책</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>이력</td>
            <td></td>
          </tr>
        </tbody>
      </PropsTable>

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        프로필 사진은 누끼를 딴 배경이 투명한 이미지여야 합니다. 또 카드의 사이즈가 고정이기 때문에 사진의 크기나 안의
        들어갈 내용의 크기를 적절히 조절해주어야합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>
          &lt;ConsultantCard <br />
          &nbsp;&nbsp;name="김준호" <br />
          &nbsp;&nbsp;position="수시레시피 대표" <br />
          &nbsp;&nbsp;career=&#123;careerArray&#125; <br />
          &nbsp;&nbsp;profileImgSrc=&#123;process.env.PUBLIC_URL + "/asset/profile_img.png"&#125; <br />
          /&gt;
        </code>
      </CodeBox>
      <ListBox>
        <li>name: string (컨설턴트 이름)</li>
        <li>position: string (컨설턴트 직책)</li>
        <li>career: Array&lt;string&gt; (컨설턴트 이력 배열)</li>
        <li>profileImgSrc: string (프로필 이미지 주소)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default ConsultantCardIntro;
