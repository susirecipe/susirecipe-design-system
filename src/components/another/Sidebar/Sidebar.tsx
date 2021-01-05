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
        <Link to="/">
          <img src={process.env.PUBLIC_URL + '/asset/logo.png'} alt="logo" />
        </Link>
      </ImageWrapper>
      <ComponentsList>
        <ul>
          <h1 className="subtitle">atoms</h1>
          <li>
            <Link to="/atoms/button">button</Link>
          </li>
          <li>
            <Link to="/atoms/input">input</Link>
          </li>
          <li>
            <Link to="/atoms/header">header</Link>
          </li>
          <li>
            <Link to="/atoms/checkbox">checkbox</Link>
          </li>
          <li>
            <Link to="/atoms/hr">hr</Link>
          </li>
          <li>
            <Link to="/atoms/link-button">linkButton</Link>
          </li>
          <li>
            <Link to="/atoms/underline">underline</Link>
          </li>
          <li>
            <Link to="/atoms/icon">icon</Link>
          </li>
          <li>
            <Link to="/atoms/deco-hr">decoHr</Link>
          </li>
          <br />

          <h1 className="subtitle">molecules</h1>
          <li>
            <Link to="/molecules/subtitle">subtitle</Link>
          </li>
          <li>
            <Link to="/molecules/dropdown">dropdown</Link>
          </li>
          <li>
            <Link to="/molecules/card">card</Link>
          </li>
          <li>
            <Link to="/molecules/event-info-card">eventInfoCard</Link>
          </li>
          <li>
            <Link to="/molecules/step-card">stepCard</Link>
          </li>
          <br />

          <h1 className="subtitle">organisms</h1>
          <li>
            <Link to="/organisms/navigation-bar">navigationBar</Link>
          </li>
          <li>
            <Link to="/organisms/footer">footer</Link>
          </li>
          <li>
            <Link to="/organisms/hamberg-tab">hambergTab</Link>
          </li>
          <li>
            <Link to="/organisms/slider">slider</Link>
          </li>
          <li>
            <Link to="/organisms/n-step">Nstep</Link>
          </li>
          <li>
            <Link to="/organisms/banner">banner</Link>
          </li>
          <li>
            <Link to="/organisms/modal">modal</Link>
          </li>
          <br />
        </ul>
      </ComponentsList>
      <CopyRight>copyright &copy; All Right Reserved by 수시레시피</CopyRight>
    </SidebarContainer>
  );
};

export default Sidebar;
