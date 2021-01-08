import React from 'react';
import HeaderIntro from 'components/another/Intro/HeaderIntro';
import ComponentTemplate from 'templates/ComponentTemplate';

const Header: React.FC = () => {
  return <ComponentTemplate header="Header" content={<HeaderIntro />} />;
};

export default Header;
