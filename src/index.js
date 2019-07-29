import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from 'containers/App';
import {Provider} from 'react-redux';
import store from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.css';

const render = () => {
    try {
        ReactDOM.render(
            <Provider store={store}>
                <div className="wrapper">
                    <App />
                </div>
            </Provider>,
            document.getElementById('root')
        );
    } catch (err) {
        console.error(err);
    }
};

render();
