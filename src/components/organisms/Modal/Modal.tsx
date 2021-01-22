import React from 'react';
import { StyledModalBlackLayout, StyledModalContentBox, StyledModal } from './Modal.styled';
import { FaTimes } from 'react-icons/fa';

interface props {
  active: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<props> = ({ children, active, onClose }) => {
  const handleModal = () => {
    onClose(false);
  };

  return (
    <StyledModal isOpen={active}>
      <StyledModalBlackLayout onClick={handleModal} />
      <StyledModalContentBox>
        <FaTimes className="close" onClick={handleModal} />
        {children}
      </StyledModalContentBox>
    </StyledModal>
  );
};

export default Modal;
