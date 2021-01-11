import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import CheckboxIntro from 'components/another/Intro/CheckboxIntro';

const Checkbox: React.FC = () => {
  return <ComponentTemplate header="Checkbox" content={<CheckboxIntro></CheckboxIntro>} />;
};

export default Checkbox;
