import React from 'react';

import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';

import App from './App';
// import Test from './Test';
import './index.css';

// REACT 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test /> */}
  </React.StrictMode>
);

// REACT 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
