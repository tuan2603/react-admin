import React from 'react';
import ReactDOM from 'react-dom';
import  './assets/vendor/bootstrap/css/bootstrap.min.css';
import  './assets/vendor/font-awesome/css/font-awesome.min.css';
import  './assets/vendor/linearicons/style.css';
import  './assets/vendor/chartist/css/chartist-custom.css';
import  './assets/css/main.css';
import  './assets/css/demo.css';
import  './assets/css/fonts_google.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('wrapper'));
registerServiceWorker();
