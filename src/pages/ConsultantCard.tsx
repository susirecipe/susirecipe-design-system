import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import ConsultantCardIntro from 'components/another/Intro/ConsultantCardIntro';

const ConsultantCard: React.FC = () => {
  return <ComponentTemplate header="ConsultantCard" content={<ConsultantCardIntro></ConsultantCardIntro>} />;
};

export default ConsultantCard;
