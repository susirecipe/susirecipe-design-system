import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import SliderIntro from 'components/another/Intro/SliderIntro';

const Slider: React.FC = () => {
  return <ComponentTemplate header="Slider" content={<SliderIntro></SliderIntro>} />;
};

export default Slider;
