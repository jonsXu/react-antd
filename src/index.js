import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Admin from './admin';
import Router from './router';
import * as serviceWorker from './serviceWorker';
var moment = require('moment');


ReactDOM.render(<Router />, document.getElementById('root'));
window.$moment = moment

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
