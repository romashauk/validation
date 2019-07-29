import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from 'containers/App';
import {Provider} from 'react-redux';
import store from './redux/configureStore';

const render = () => {
    try {
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root')
        );
    } catch (err) {
        console.error(err);
    }
};

render();
