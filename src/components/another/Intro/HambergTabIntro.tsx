import React from 'react';
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
import HambergTab from 'components/organisms/HambergTab/HambergTab';

const HamberTabIntro: React.FC = () => {
  const defaultMenus: Array<MainMenu> = [
    {
      name: '수시레시피 소개',
      link: '#',
      submenu: [
        {
          name: '수시레시피 소개',
          link: '#',
        },
        {
          name: '컨설턴트',
          link: '#',
        },
      ],
    },
    {
      name: '컨설팅 프로그램',
      link: '#',
      submenu: [
        {
          name: '패키지상품',
          link: '#',
        },
        {
          name: '생활기록부',
          link: '#',
        },
        {
          name: '수시지원 솔루션',
          link: '#',
        },
      ],
    },
    {
      name: '정시컨설팅',
      link: '#',
      submenu: [],
    },
    {
      name: '의대컨설팅',
      link: '#',
      submenu: [],
    },
    {
      name: '컨설팅 후기',
      link: '#',
      submenu: [],
    },
  ];
  return (
    <IntroContainer>
      <IntroParagraph>
        햄버거탭은 모바일 환경에서의 메뉴바라고 생각하면 좋습니다. 메뉴버튼의 모양이 햄버거를 닮아 나온 용어입니다.{' '}
        <br />
        네비게이션바와 햄버거탭은 기능이 동일합니다. 다만 모바일과 데스크탑 환경에서 네비게이션 바의 활용이 적절치 못해
        세로로 된 네비게이션 바의 필요로 설계하였습니다.
        <br />
        햄버거탭은 평소 브라우저의 왼쪽 뒤편에 존재하다가 클릭 시 왼쪽에서 슬라이딩으로 나오게 됩니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <HambergTab menu={defaultMenus} logoImgSrc={process.env.PUBLIC_URL + '/asset/logo3.png'} />
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
            <td>배경색</td>
            <td>메뉴 리스트</td>
            <td></td>
          </tr>
          <tr>
            <td>로고</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </PropsTable>
      <MarginBox margin={80} />

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        햄버거탭의 위치는 <b>항상 왼쪽에 고정</b>되어 위치해야 합니다. 디자인할 때나 개발할 때에 주의하여야 합니다.{' '}
        <br />
        햄버거탭은 햄버거메뉴버튼과 같이 있어야합니다. 개발할 때 주의할 점은 왼쪽너머에 위치해있다가 사용될 때
        슬라이드로 넘어오게끔 작업하여야하고 전체화면을 투명한 <b>블랙 레이아웃으로 덮어야 한다는 점</b>을 잊어서는
        안됩니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>
          &lt;HambergTab menu=&#123;defaultMenus&#125; logoImgSrc=&#123;process.env.PUBLIC_URL + "/asset/logo3.png"&#125;
          /&gt;
        </code>
      </CodeBox>
      <ListBox>
        <li>
          menu: Array&lt;&#123; <br />
          &nbsp;&nbsp;name: string; <br />
          &nbsp;&nbsp;link: string; <br />
          &nbsp;&nbsp;submenu: Array&lt;&#123; name: string; link: string; &#125;&gt;; <br />
          &nbsp;&nbsp;pos?: number; <br />
          &#125;&gt; (메뉴 리스트)
        </li>
        <li>logoImgSrc: string (로고이미지 주소)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default HamberTabIntro;
