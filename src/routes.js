import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './component/App';
import HomePage from './component/home/HomePage';
import AboutPage from './component/about/AboutPage';
import ContentPage from './component/content/ContentPage';

export default (
    <Route path='/' component={App} >
        <IndexRoute component={HomePage} />
        <Route path='about' component={AboutPage} />
        <Route path='content' component={ContentPage} />
    </Route>
);
