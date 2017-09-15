import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, BrowserRouter } from 'react-router-dom';
import reducers from './reducers';

import MainContainer from './containers/MainContainer';

import '../css/main.css';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const store = createStore(
  reducers,
  persistedState
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={MainContainer} />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
