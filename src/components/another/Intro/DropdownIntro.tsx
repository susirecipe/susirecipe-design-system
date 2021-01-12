import React, { useState, useMemo } from 'react';
import {
  IntroContainer,
  IntroParagraph,
  IntroSmallHeader,
  ComponentWrapper,
  ControlBox,
  PropsTable,
  MarginBox,
  CodeBox,
  ListBox,
} from './global-intro.styled';
import Dropdown from 'components/molecules/Dropdown/Dropdown';

interface menu {
  name: string;
  link: string;
}

const DropdownIntro: React.FC = () => {
  const defaultMenus = useMemo<Array<menu>>(
    () => [
      {
        name: 'button',
        link: '#',
      },
      {
        name: 'input',
        link: '#',
      },
      {
        name: 'header',
        link: '#',
      },
    ],
    []
  );
  const [inputs, setInputs] = useState({
    menuItem: '',
    startPos: 20,
  });
  const [menus, setMenus] = useState(defaultMenus);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMenu: menu = {
      name: inputs.menuItem,
      link: '#',
    };
    setMenus([...menus, newMenu]);
    setInputs({ ...inputs, menuItem: '' });
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    if (name === 'startPos') {
      setInputs({ ...inputs, [name]: parseInt(value) });
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };

  return (
    <IntroContainer>
      <IntroParagraph>
        드랍다운은 유기체의 컴포넌트인 네비게이션바와 함께 사용됩니다. 네비게이션바의 메뉴에 마우스를 올렸을 때 세부
        메뉴를 보여주는 컴포넌트입니다. <br />
        우리는 드랍다운을 네비게이션바와 분리해야한다고 생각했고 컴포넌트화를 진행하였습니다.
      </IntroParagraph>

      <IntroSmallHeader>Overview</IntroSmallHeader>
      <ComponentWrapper>
        <Dropdown menu={menus} leftPos={inputs.startPos} />
      </ComponentWrapper>
      <ControlBox>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="menuItem"
            value={inputs.menuItem}
            placeholder="값을 입력하세요"
            onChange={handleInput}
          />
          <input type="submit" value="추가" />
        </form>
        <div>
          메뉴 시작 위치:{' '}
          <input
            type="range"
            name="startPos"
            value={inputs.startPos}
            min="20"
            max="500"
            step="10"
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
            <td>메뉴 이름</td>
            <td></td>
          </tr>
          <tr>
            <td>메뉴 간격</td>
            <td>메뉴 시작 위치</td>
            <td></td>
          </tr>
          <tr>
            <td>높이</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </PropsTable>
      <MarginBox margin={80} />

      <IntroSmallHeader>Warning</IntroSmallHeader>
      <IntroParagraph>
        드랍다운 안에 메뉴들이 들어갈 때 반드시 링크버튼으로 구성해야한다. <br />
        그리고 <b>메뉴 시작위치</b>는 네비게이션 바 위치에 따라 달라지므로 변경할 수 있다.
      </IntroParagraph>

      <IntroSmallHeader>
        Refference<small>(for Develop)</small>
      </IntroSmallHeader>
      <CodeBox>
        <code>&lt;Dropdown menu=&#123;menuArray&#125; leftPos=&#123;50&#125; /&gt;</code>
      </CodeBox>
      <ListBox>
        <li>menu: Array&lt;&#123; name: string; link: string; &#125;&gt; (메뉴 객체들의 리스트)</li>
        <li>leftPos: number (메뉴 시작지점 위치)</li>
      </ListBox>
    </IntroContainer>
  );
};

export default DropdownIntro;
