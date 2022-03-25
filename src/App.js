import React from 'react'
import BasicTitle from './components/title.styles';
import { DefaultButton, HipsterButton } from './components/button.styles';

/**Style Components app version 5 - App js file - Features:
 *        --> Importing and Placing 'HipsterButton'
 * 
 * Note: 'HipsterButton' is an extended styled 'React Component'
 */


function App() {
  return (
    <>
    <div style={{padding:'2rem', backgroundColor:'#b11226'}}>
      {/**here i apply the Style Component to the title */}

      {/**Inspecting with the browser will show the h1*/}
     <BasicTitle>Styled Component</BasicTitle> 
     {/**this is the title i'm going to customize*/}
     {/**i call the prop 'customPurple' */}
     <BasicTitle customPurple>Styled Component</BasicTitle> 
     <DefaultButton>click me </DefaultButton>
     {/**Here i set 'HipsterButton' */}
     <HipsterButton>Hipster Click </HipsterButton>
    </div>
    </>
  );
}

export default App;
