import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import HamberTabIntro from 'components/another/Intro/HambergTabIntro';

const HambergTab: React.FC = () => {
  return <ComponentTemplate header="HambergTab" content={<HamberTabIntro></HamberTabIntro>} />;
};

export default HambergTab;
