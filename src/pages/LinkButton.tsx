import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import LinkButtonIntro from 'components/another/Intro/LinkButtonIntro';

const LinkButton: React.FC = () => {
  return <ComponentTemplate header="Linkbutton" content={<LinkButtonIntro></LinkButtonIntro>} />;
};

export default LinkButton;
