import React from 'react';
import ReactDOM, { render } from 'react-dom'; //why other js don't need to import render
import ChatApp from './component/ChatApp.js';
import './index.css';

ReactDOM.render(<ChatApp />, document.getElementById('root'));
