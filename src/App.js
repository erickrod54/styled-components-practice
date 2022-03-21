import React from 'react'
import BasicTitle from './components/title.styles';
import { DefaultButton } from './components/button.styles';

/**Style Components app version 4 - App js file - Features:
 *        --> Building Style Component for 'DefaultButton'.
 *        --> Restructuring directory to separate style 
 *            components its own file.
 *        --> Importing Style Components.
 *        --> Customizing 'BasicTitle' implementing 'props' 
 * 
 * Note: Separating the styles components is the good practice
 * so they can be organized, to code will be more readable and
 * and can be easily modified
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
     <DefaultButton>click me</DefaultButton>
    </div>
    </>
  );
}

export default App;
