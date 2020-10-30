import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { renderRoutes } from 'react-router-config';

import theme from './theme';
import { configureStore } from './store';
import routes from './routes';

import './assets/scss/index.scss';

const history = createBrowserHistory();
const store = configureStore();

const App = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          {renderRoutes(routes)}
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
