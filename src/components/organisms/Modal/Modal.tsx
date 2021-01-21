import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalClose } from 'actions/modal';
import { RootState } from 'common/store';
import { StyledModalBlackLayout, StyledModalContentBox, StyledModal } from './Modal.styled';
import { FaTimes } from 'react-icons/fa';

const Modal: React.FC = ({ children }) => {
  const isOpen = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(modalClose());
  };

  return (
    <StyledModal isOpen={isOpen}>
      <StyledModalBlackLayout onClick={handleModal} />
      <StyledModalContentBox>
        <FaTimes className="close" onClick={handleModal} />
        {children}
      </StyledModalContentBox>
    </StyledModal>
  );
};

export default Modal;
