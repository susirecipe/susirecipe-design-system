import React from 'react';
import ComponentTemplate from 'templates/ComponentTemplate';
import BannerIntro from 'components/another/Intro/BannerIntro';

const Banner: React.FC = () => {
  return <ComponentTemplate header="Banner" content={<BannerIntro></BannerIntro>} />;
};

export default Banner;
