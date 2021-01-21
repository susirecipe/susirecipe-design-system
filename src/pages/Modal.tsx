import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import ModalIntro from 'components/another/Intro/ModalIntro';

const Modal: React.FC = () => {
  return <ComponentTemplate header="Modal" content={<ModalIntro></ModalIntro>} />;
};

export default Modal;
