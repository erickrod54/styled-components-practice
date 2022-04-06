import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

/**Card app version  3 - index js file - Features:
 * 
 *        --> Comment 'index' css file in order to test
 *            'global-styles' js
 * 
 * Note: This is an alternative to the 'Global Styles' sheet -
 * index.css - and this alternative made use of Styled 
 * Components.
 * 
 * --this implementation can be done for some cases where 
 * --i cannot use the index css sheet, so this will suit well
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

