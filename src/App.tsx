import React from 'react';
import AppRouter from 'Router';
import { Provider } from 'react-redux';
import store from 'common/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
