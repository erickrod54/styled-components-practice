import React from 'react'
import Setup from './setup-app/more-complex-title-app/morecomplextitle-app'
import AlternativeTitle from './setup-app/more-complex-title-app/alternativetitle.component';

/**Style Components app version  8 - App js file - Features:
 *        --> Importing and Placing 'AlternativeTitle' Component
 *            with a 'title' prop of 'Alternative Title'
 * 
 * Note: This Component will be applied to set a 'Global Variable'
 * Style class using utils approach 
 */


function App() {
  return (
    <>
      <Setup title={'more complex title'}/>
      <AlternativeTitle title={'Alternative Title'}/>
    </>
  );
}

export default App;
