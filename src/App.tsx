import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
