import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import EventInfoCardIntro from 'components/another/Intro/EventInfoCardIntro';

const EventInfoCard: React.FC = () => {
  return <ComponentTemplate header="EventInfoCard" content={<EventInfoCardIntro></EventInfoCardIntro>} />;
};

export default EventInfoCard;
