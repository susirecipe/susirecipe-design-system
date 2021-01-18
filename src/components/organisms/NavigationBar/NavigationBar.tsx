import React, { useCallback, useState } from 'react';
import { StyledNavivagtionBar, StyledLinkBox, LinkWrapper, ImageBox } from './NavigationBar.styled';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LinkButton from 'components/atoms/LinkButton/LinkButton';
import Dropdown from 'components/molecules/Dropdown/Dropdown';
import { showDropdown, hiddenDropdown } from 'actions/dropdown';

interface props {
  menu: Array<MainMenu>;
  logoImgSrc: string;
}

const NavigationBar: React.FC<props> = ({ menu, logoImgSrc }) => {
  const [currentMenu, setCurrentMenu] = useState(0);
  const [activeTab, setActiveTab] = useState(false);
  const [dropdownPos, setDropdownPos] = useState<number | undefined>(0);
  const [submenu, setSubmenu] = useState<Array<Menu>>([]);

  const dispatch = useDispatch();

  const handleHoverOn = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { id } = event.currentTarget;
      let isSubmenuEmpty: boolean = false;

      menu.forEach((value, idx) => {
        if (id === value.name) {
          setCurrentMenu(idx);
          setDropdownPos(value.pos);
          setSubmenu(menu[idx].submenu);
          if (menu[idx].submenu.length === 0) {
            isSubmenuEmpty = true;
          }
        }
      });

      setActiveTab(true);
      if (!isSubmenuEmpty) {
        dispatch(showDropdown());
      }
    },
    [dispatch, menu]
  );

  const handleHoverOut = useCallback(() => {
    dispatch(hiddenDropdown());
    setActiveTab(false);
  }, [dispatch]);

  return (
    <>
      <StyledNavivagtionBar>
        <ImageBox>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + logoImgSrc} alt="logo" />
          </Link>
        </ImageBox>
        <StyledLinkBox>
          {menu.map((value, idx) => (
            <LinkWrapper
              key={idx}
              id={value.name}
              onMouseEnter={handleHoverOn}
              onMouseLeave={handleHoverOut}
              isHover={currentMenu === idx && activeTab}
            >
              <LinkButton to="#">{value.name}</LinkButton>
            </LinkWrapper>
          ))}
        </StyledLinkBox>
      </StyledNavivagtionBar>
      <Dropdown
        menu={submenu}
        leftPos={dropdownPos}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOut}
      />
    </>
  );
};

export default NavigationBar;
