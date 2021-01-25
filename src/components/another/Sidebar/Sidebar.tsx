import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/store';
import { slideClose } from 'actions/slidebar';
import { SidebarContainer, CloseBtn, ImageWrapper, ComponentsList, CopyRight } from './Sidebar.styled';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen: boolean = useSelector((state: RootState) => state.slidebar);

  const closeSlideMenu = () => {
    dispatch(slideClose());
  };

  return (
    <SidebarContainer show={isOpen}>
      <CloseBtn>
        <AiOutlineClose onClick={closeSlideMenu} />
      </CloseBtn>
      <ImageWrapper>
        <Link to="/" onClick={closeSlideMenu}>
          <img src={process.env.PUBLIC_URL + '/asset/logo.png'} alt="logo" />
        </Link>
      </ImageWrapper>
      <ComponentsList>
        <ul>
          <h1 className="subtitle">atoms</h1>
          <li>
            <Link to="/atoms/button" onClick={closeSlideMenu}>button</Link>
          </li>
          <li>
            <Link to="/atoms/input" onClick={closeSlideMenu}>input</Link>
          </li>
          <li>
            <Link to="/atoms/header" onClick={closeSlideMenu}>header</Link>
          </li>
          <li>
            <Link to="/atoms/checkbox" onClick={closeSlideMenu}>checkbox</Link>
          </li>
          <li>
            <Link to="/atoms/hr" onClick={closeSlideMenu}>hr</Link>
          </li>
          <li>
            <Link to="/atoms/link-button" onClick={closeSlideMenu}>linkButton</Link>
          </li>
          <li>
            <Link to="/atoms/underline" onClick={closeSlideMenu}>underline</Link>
          </li>
          <li>
            <Link to="/atoms/icon" onClick={closeSlideMenu}>icon</Link>
          </li>
          <li>
            <Link to="/atoms/deco-hr" onClick={closeSlideMenu}>decoHr</Link>
          </li>
          <br />

          <h1 className="subtitle">molecules</h1>
          <li>
            <Link to="/molecules/subtitle" onClick={closeSlideMenu}>subtitle</Link>
          </li>
          <li>
            <Link to="/molecules/dropdown" onClick={closeSlideMenu}>dropdown</Link>
          </li>
          <li>
            <Link to="/molecules/card" onClick={closeSlideMenu}>card</Link>
          </li>
          <li>
            <Link to="/molecules/event-info-card" onClick={closeSlideMenu}>eventInfoCard</Link>
          </li>
          <li>
            <Link to="/molecules/step-card" onClick={closeSlideMenu}>stepCard</Link>
          </li>
          <li>
            <Link to="/molecules/consultant-card" onClick={closeSlideMenu}>consultantCard</Link>
          </li>
          <br />

          <h1 className="subtitle">organisms</h1>
          <li>
            <Link to="/organisms/navigation-bar" onClick={closeSlideMenu}>navigationBar</Link>
          </li>
          <li>
            <Link to="/organisms/footer" onClick={closeSlideMenu}>footer</Link>
          </li>
          <li>
            <Link to="/organisms/hamberg-tab" onClick={closeSlideMenu}>hambergTab</Link>
          </li>
          <li>
            <Link to="/organisms/slider" onClick={closeSlideMenu}>slider</Link>
          </li>
          <li>
            <Link to="/organisms/banner" onClick={closeSlideMenu}>banner</Link>
          </li>
          <li>
            <Link to="/organisms/modal" onClick={closeSlideMenu}>modal</Link>
          </li>
          <br />
        </ul>
      </ComponentsList>
      <CopyRight>copyright &copy; All Right Reserved by 수시레시피</CopyRight>
    </SidebarContainer>
  );
};

export default Sidebar;
