import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import PersonList from './ReactPOST';
//import PersonList from './ReactGET';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
