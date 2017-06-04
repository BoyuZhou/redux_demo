import React from 'react';
import { render } from 'react-dom';
import routes from './routes'
import { AppContainer } from 'react-hot-loader';

const root = document.getElementById('app');

if ( __DEV__ ){
  console.log("现在是开发环境")
}

if (__PROD__) {
  console.log("现在是生产环境")
}

console.log(AppContainer);

render(
    <AppContainer>
        { routes }
    </AppContainer>
    , root);


if (module.hot) {
    module.hot.accept('./routes', () => {
        const routes = require('./routes').default;
        render(
            <AppContainer>
                { routes }
            </AppContainer>,
            root
        );
    });
}