import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import HomeIntroduce from 'components/another/HomeIntroduce/HomeIntroduce';

const queryString = require('query-string');

const Home: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  if (location.search) {
    const query = queryString.parse(location.search);
    history.replace(query.page);
  }

  return <HomeIntroduce />;
};

export default Home;
