import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import StepCardIntro from 'components/another/Intro/StepCardIntro';

const StepCard: React.FC = () => {
  return <ComponentTemplate header="StepCard" content={<StepCardIntro></StepCardIntro>} />;
};

export default StepCard;
