import React from 'react';
import { useDispatch } from 'react-redux';
import { slideOpen } from 'actions/slidebar';
import { ContentContainer, MenuBtn } from './Content.styled';
import { BiMenu } from 'react-icons/bi';

const Content: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  const openSlideMenu = () => {
    dispatch(slideOpen());
  };

  return (
    <ContentContainer>
      <MenuBtn>
        <BiMenu onClick={openSlideMenu} />
      </MenuBtn>
      {children}
    </ContentContainer>
  );
};

export default Content;
