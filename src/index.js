import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import store from './store';
import Routes from './router'
import './assets/sass/main.sass'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import 'pace-js/themes/purple/pace-theme-flash.css'

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
