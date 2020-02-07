import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { store } from './redux/Store';
import { App } from './App';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Favicon url="https://cdn4.iconfinder.com/data/icons/famous-characters-add-on-vol-1-flat/48/Famous_Character_-_Add_On_1-33-512.png" />
      <App />
    </Provider>
  </HashRouter>
, document.getElementById('root'));
