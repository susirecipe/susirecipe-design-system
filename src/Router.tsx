import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from 'components/another/Sidebar/Sidebar';
import Home from 'pages/Home';
import Content from 'components/another/Content/Content';

const AppRouter: React.FC = () => (
  <Router basename='/susirecipe-design-system'>
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

export default AppRouter;