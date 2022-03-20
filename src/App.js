import React from 'react'
import styled from 'styled-components';

/**Style Components app version 3 - App js file - Features:
 *        --> Building Style Component for 'BasicTitle'
 * 
 * Note: to build style-components must be previously installed
 * 'styled-components' library and imported styled from styled
 * components, and to track bugs 'vscode-styled-components'
 * extension
 */

/**here i buil 'BasicTitle' Component */
/**this kind of sintax is called tagged template string
 * reference: freecodecamp article*/
const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
`

function App() {
  return (
    <>
    <div style={{padding:'2rem', backgroundColor:'#b11226'}}>
      {/**here i apply the Style Component to the title */}

      {/**Inspecting with the browser will show the h1*/}
     <BasicTitle>Styled Component</BasicTitle>
     <BasicTitle>Styled Component</BasicTitle>
     <BasicTitle>Styled Component</BasicTitle>
     <BasicTitle>Styled Component</BasicTitle>
       <button className='btn'>click me</button> 
      
    </div>
    </>
  );
}

export default App;
