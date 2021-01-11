import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import HrIntro from 'components/another/Intro/HrIntro';

const Hr: React.FC = () => {
  return <ComponentTemplate header="Hr" content={<HrIntro></HrIntro>} />;
};

export default Hr;
