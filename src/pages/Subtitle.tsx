import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import SubtitleIntro from 'components/another/Intro/SubtitleIntro';

const Subtitle: React.FC = () => {
  return <ComponentTemplate header="Subtitle" content={<SubtitleIntro></SubtitleIntro>} />;
};

export default Subtitle;
