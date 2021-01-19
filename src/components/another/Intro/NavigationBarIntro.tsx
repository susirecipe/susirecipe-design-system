import { hiddenDropdown } from 'actions/dropdown';
import NavigationBar from 'components/organisms/NavigationBar/NavigationBar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NotSupport from 'components/another/NotSupport/NotSupport';
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

const NavigationBarIntro: React.FC = () => {
  const defaultMenus: Array<MainMenu> = [
    {
      name: '수시레시피 소개',
      link: '#',
      submenu: [
        { name: '수시페시피 소개', link: '#' },
        { name: '컨설턴트', link: '#' },
      ],
      pos: 170,
    },
    {
      name: '컨설팅 프로그램',
      link: '#',
      submenu: [
        { name: '패키지 상품', link: '#' },
        { name: '생활기록부', link: '#' },
      ],
      pos: 325,
    },
    {
      name: '정시 컨설팅',
      link: '#',
      submenu: [],
    },
  ];

  const dispatch = useDispatch();

  // initial close
  useEffect(() => {
    dispatch(hiddenDropdown());
  }, [dispatch]);

  return (
    <IntroContainer>
      <IntroParagraph>
        네비게이션바는 웹 사이트에 있어서 필수적인 요소입니다. 페이지를 이동할 수 있게 하는 기능을 담고 있어 아주
        중요하고 복잡합니다. <br />
        우리는 최대한 재사용을 잘하기 위해 여러 컴포넌트들의 집합체로 설계하였습니다. 링크버튼과 드랍다운이 이
        컴포넌트를 구성합니다. <br />
        컴포넌트의 구성은 메인메뉴와 서브메뉴로 나누어져 있습니다. 메인메뉴가 위에 있는 메뉴들이고 서브메뉴는 메인메뉴에
        마우스를 올렸을 때 나타나는 메뉴들 입니다. <br />
        보통 네비게이션바는 상단에 고정하여 사용하는 것을 원칙으로 합니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      {window.innerWidth < 1025 ? (
        <NotSupport />
      ) : (
        <>
          <ComponentWrapper>
            <NavigationBar menu={defaultMenus} logoImgSrc="/asset/logo3.png" />
          </ComponentWrapper>
        </>
      )}

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
            <td>배경 색</td>
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
        디자인부분에서 주의할 점은 네비게이션바는 넓이가 <b>항상 풀사이즈</b>여야 한다는 것입니다. 위 예시에는
        풀사이즈가 아니지만 실제 홈페이지에서는 풀사이즈로 디자인되어야 합니다. <br />
        개발부분에서는 prop이 까다롭기 때문에 타입을 유의깊게 봐야합니다. 또한 <b>서브메뉴가 없다면 빈 배열</b>을
        넘겨주어야 합니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>&lt;NavigationBar menu=&#123;defaultMenus&#125; logoImgSrc="/asset/logo3.png" /&gt;</code>
      </CodeBox>
      <ListBox>
        <li>
          menu: Array&lt;&#123;
          <br />
          &nbsp;&nbsp;name: string;
          <br />
          &nbsp;&nbsp;link: string;
          <br />
          &nbsp;&nbsp;submenu: Array&lt;&#123; name: string; link: string; &#125;&gt;;
          <br />
          &nbsp;&nbsp;pos?: number;
          <br />
          &#125;&gt; (메뉴 리스트)
        </li>
        <li>logoImgSrc: string (로고이미지 주소)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default NavigationBarIntro;
