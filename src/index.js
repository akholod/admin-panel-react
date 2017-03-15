import 'babel-polyfill';
import React from 'react';
import { reander } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

reander(
    <Router
        history={browserHistory}
        routes={routes}
    />,
    document.getElementById('root')
);
