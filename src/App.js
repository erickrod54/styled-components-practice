import React from 'react';
import Setup from './setup-app/card-app/card.component';
import GlobalStyles from './global-styles';

/**Card app version  3 - 'App' js file - Features:
 * 
 *        --> Importing and placing 'GolbalStyles' component.
 * 
 * Note: Here i import the 'Card' Component
 */


function App() {
  return (
    <>
      {/**Here i place it and the 'Global Styles' are 
       * applied */}
      <GlobalStyles />
      <Setup />
    </>
  );
}

export default App;
