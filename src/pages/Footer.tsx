import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import FooterIntro from 'components/another/Intro/FooterIntro';

const Footer: React.FC = () => {
  return <ComponentTemplate header="Footer" content={<FooterIntro></FooterIntro>} />;
};

export default Footer;
