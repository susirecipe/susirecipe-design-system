import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import ButtonIntro from 'components/another/ButtonIntro/ButtonIntro';

const Button: React.FC = () => {
  return <ComponentTemplate header="Button" content={<ButtonIntro />} />;
};

export default Button;
