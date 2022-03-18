import React from 'react'
/**Style Components app version 2 - Features:
 *        --> Copying padding from the title and btn
 *           'div' to hello world 'div'
 *        -->Personalizing a style for hello 
 *           world
 * 
 * Note: the implementations on this version will point
 * the major flaws of 'Inline Styles' and 'Global 
 * Stylesheet'
 * 
 * To personalize a style for example the 'title' also
 * comes flaws due to complexity as child stylesheets
 */
function App() {
  return (
    <>
    <div style={{padding:'2rem', backgroundColor:'#b11226'}}>
      <h2 className='title'>Styled Components</h2>
      <button className='btn'>click me</button> 
      {/**here i copy the title and btn div padding */}
      <div style={{padding:'2rem'}}>
      {/**here i make a style for 'hello world' */}
        <h2 className='section-title'>hello world</h2>
      </div>
    </div>
    </>
  );
}

export default App;
