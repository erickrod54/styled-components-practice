import React from 'react';
import Setup from './setup-app/more-complex-props-app/more-complex-props-app'
import './index.css'

/**MoreComplexPropsApp version 1 - 'App' js file - Features:
 * 
 *          -->Importing and Placing 'MoreComplexPropsApp'.
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
