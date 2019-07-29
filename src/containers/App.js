import React from 'react';
import './style.scss';
import {hot} from 'react-hot-loader/root';
import {HashRouter} from 'react-router-dom';
import Routes from './Routes';

const App = () => {
    return (
        <HashRouter>
            <Routes />
        </HashRouter>
    );
};

export default hot(App);
