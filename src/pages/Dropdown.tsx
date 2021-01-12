import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import DropdownIntro from 'components/another/Intro/DropdownIntro';

const Dropdown: React.FC = () => {
  return <ComponentTemplate header="Dropdown" content={<DropdownIntro></DropdownIntro>} />;
};

export default Dropdown;
