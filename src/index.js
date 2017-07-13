import React from 'react';
import { renderStatic } from 'glamor-server';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let { html, css, ids } = renderStatic(() => {
    return React.renderToStaticMarkup(<App />)
})

console.log('html', html);
console.log('css', css);
console.log('ids', ids);

registerServiceWorker();
