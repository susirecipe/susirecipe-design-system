import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { slideOpen } from 'actions/slidebar';
import { RootState } from 'common/store';
import { ContentContainer, MenuBtn } from './Content.styled';
import { BiMenu } from 'react-icons/bi';

const Content: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const isOpen: boolean = useSelector((state: RootState) => state.slidebar);

  const openSlideMenu = () => {
    dispatch(slideOpen());
  };

  return (
    <ContentContainer>
      <MenuBtn hidden={isOpen}>
        <BiMenu onClick={openSlideMenu} />
      </MenuBtn>
      {children}
    </ContentContainer>
  );
};

export default Content;
