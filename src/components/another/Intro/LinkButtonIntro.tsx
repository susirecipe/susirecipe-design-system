import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
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
import LinkButton from 'components/atoms/LinkButton/LinkButton';

interface Param {
  page: string;
}

interface ActivePage {
  page1: boolean;
  page2: boolean;
  page3: boolean;
  page4: boolean;
}

const LinkButtonIntro: React.FC = () => {
  const params = useParams<Param>();

  const getCurrentActivePageObj = useCallback((): ActivePage => {
    const initActivePages = {
      page1: false,
      page2: false,
      page3: false,
      page4: false,
    };

    if (Object.keys(params).length === 0) {
      return { ...initActivePages };
    } else {
      const { page } = params;
      return { ...initActivePages, [page]: true };
    }
  }, [params]);

  const getCurrentPage = useCallback(() => {
    if (Object.keys(params).length === 0) {
      return '홈';
    } else {
      const { page } = params;
      return page;
    }
  }, [params]);

  const [activePages, setActivePages] = useState<ActivePage>(getCurrentActivePageObj());
  const [currentPage, setCurrentPage] = useState(getCurrentPage());

  const handleActivePage = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setActivePages(getCurrentActivePageObj());
  };

  useEffect(() => {
    setCurrentPage(getCurrentPage());
    setActivePages(getCurrentActivePageObj());
  }, [params, getCurrentPage, getCurrentActivePageObj]);

  return (
    <IntroContainer>
      <IntroParagraph>
        링크버튼은 다른 페이지로 라우팅을 하기위해 만들어진 버튼입니다. <br />
        우리는 이 버튼을 드랍다웃이나 햄버거탭, 네비게이션 바 등에서 주로 사용하기로 했습니다.
        <br />
        페이지 이동은 충분히 재사용될 가능성이 많고 굳이 위의 컴포넌트가 아니더라도 사용할 여지가 많다고 생각을 해서
        컴포넌트화 하게 되었습니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper blackBG>
        <LinkButton id="page1" to="/atoms/link-button/page1" active={activePages.page1} onClick={handleActivePage}>
          페이지1
        </LinkButton>
        <br />
        <LinkButton id="page2" to="/atoms/link-button/page2" active={activePages.page2} onClick={handleActivePage}>
          페이지2
        </LinkButton>
        <br />
        <LinkButton id="page3" to="/atoms/link-button/page3" active={activePages.page3} onClick={handleActivePage}>
          페이지3
        </LinkButton>
        <br />
        <LinkButton id="page4" to="/atoms/link-button/page4" active={activePages.page4} onClick={handleActivePage}>
          페이지4
        </LinkButton>
      </ComponentWrapper>
      <ControlBox>현재 페이지: {currentPage}</ControlBox>
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
            <td>글자 크기</td>
            <td>내용</td>
            <td>글자 색(액티브 유무)</td>
          </tr>
        </tbody>
      </PropsTable>

      <IntroSmallHeader>Types</IntroSmallHeader>
      <ComponentWrapper>
        <LinkButton to="#">기본 링크</LinkButton>
        <MarginBox margin={20} />
        <LinkButton to="#" active>
          액티브 링크
        </LinkButton>
      </ComponentWrapper>
      <MarginBox margin={80} />

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        가장 중요한 부분은 이 컴포넌트는 네비게이션 바 같은 컴포넌트들과 같이 쓰인다는 것입니다. <br />
        그래서 최소한의 기능만 링크 버튼에 유지한 채 링크 버튼의 상태를 유지하는 기능은 상위 컴포넌트에 맡기는 것이 좋습니다. <br />
        또한 onClick과 id를 적절히 연결하여 액티브 상태를 유지하는 것도 좋은 방법입니다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>
          &lt;LinkButton id ="link1" to="/page" active onClick=&#123;clickMethod&#125; /&gt;
        </code>
      </CodeBox>
      <ListBox>
        <li>id?: string (링크버튼 고유 식별)</li>
        <li>to: string (라우팅 페이지)</li>
        <li>active?: boolean (액티브 상태 활성화)</li>
        <li>onClick?: (event: React.MouseEvent&lt;HTMLAnchorElement, MouseEvent&gt;) =&gt; void (onClick 함수)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default LinkButtonIntro;
