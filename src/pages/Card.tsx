import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import CardIntro from 'components/another/Intro/CardIntro';

const Card: React.FC = () => {
  return <ComponentTemplate header="Card" content={<CardIntro></CardIntro>} />;
};

export default Card;
