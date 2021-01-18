import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import NavigationBarIntro from 'components/another/Intro/NavigationBarIntro';

const NavigationBar: React.FC = () => {
  return <ComponentTemplate header="NavigationBar" content={<NavigationBarIntro></NavigationBarIntro>} />;
};

export default NavigationBar;
