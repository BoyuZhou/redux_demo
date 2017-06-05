/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import routes from './routes';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

const root = document.getElementById('app');

render(
  <AppContainer>
    { routes }
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default;
    render(
      <AppContainer>
        { newRoutes }
      </AppContainer>,
      root
    );
  });
}
