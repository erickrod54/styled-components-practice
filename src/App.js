import React from 'react'
import Setup from './setup-app/more-complex-title-app/morecomplextitle-app'

/**Style Components app version  7 - App js file - Features:
 *        --> Applying 'title' prop to Setup, in order to work
 *            on 'MoreComplexTitle'
 * 
 * Note: This update is made to add styled app easier by mounting
 * them in App js
 */


function App() {
  return (
    <>
      <Setup title={'more complex title'}/>
    </>
  );
}

export default App;
