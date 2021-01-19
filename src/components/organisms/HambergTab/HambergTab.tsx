import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHamberTab, StyledImageWrapper, StyledMainMenu } from './HambergTab.styled';

interface props {
  menu: Array<MainMenu>;
  logoImgSrc: string;
}

const HanberTab: React.FC<props> = ({ menu, logoImgSrc }) => {
  return (
    <StyledHamberTab>
      <StyledImageWrapper>
        <Link to="/">
          <img src={logoImgSrc} alt="logo" />
        </Link>
      </StyledImageWrapper>
      {menu.map(item => (
        <StyledMainMenu>
          <h1>
            <Link to="#">{item.name}</Link>
          </h1>
          {item.submenu.map(subitem => (
            <h2>
              <Link to={subitem.link}>{subitem.name}</Link>
            </h2>
          ))}
        </StyledMainMenu>
      ))}
    </StyledHamberTab>
  );
};

export default HanberTab;
