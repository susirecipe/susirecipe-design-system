import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import UnderlineIntro from 'components/another/Intro/UnderlineIntro';

const Underline: React.FC = () => {
  return <ComponentTemplate header="Underline" content={<UnderlineIntro></UnderlineIntro>} />;
};

export default Underline;
