import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import IconIntro from 'components/another/Intro/IconIntro';

const Icon: React.FC = () => {
  return <ComponentTemplate header="Icon" content={<IconIntro></IconIntro>} />;
};

export default Icon;
