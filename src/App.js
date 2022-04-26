import React from 'react';
import Setup from './setup-app/form-app/form-app'
import './index.css'

/**Form-app version 1 - 'form-app' file - Features:
 * 
 *          -->Importing and Placing 'FormApp'.
 * 
 * Note: 'FormButton' has applied 'attrs' feature that is
 * as native handler for props, this case it handles for
 * a demonstration props as 'type' of 'text' or 
 * submit, because 'click me' and 'submit' that has
 * two different 'types' props -text and submit- 
*/

function App() {

  return (
    <>
       <Setup />
    </>
  );
}

export default App;
