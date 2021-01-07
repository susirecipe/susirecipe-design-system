import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import InputIntro from 'components/another/Intro/InputIntro';

const Inupt: React.FC = () => {
  return <ComponentTemplate header="Input" content={<InputIntro></InputIntro>} />;
};

export default Inupt;
