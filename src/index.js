import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index.jsx';





document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(React.createElement(App), document.querySelector('#root'));
});
