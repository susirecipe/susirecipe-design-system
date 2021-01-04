import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import styled from 'styled-components';
import Sidebar from 'components/another/Sidebar/Sidebar';

const AppRouter: React.FC = () => (
  <Router>
    <Sidebar />
    <Content>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Content>
  </Router>
);

const Content = styled.div`
  width: calc(100vw - 300px);
  margin-left: 300px;
`;

export default AppRouter;
