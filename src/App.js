import React from 'react'
/**Style Components app version 1 - Features:
 *        --> Inline Styles 
 *        --> Global Stylesheet 
 * 
 * Note: the Global Stylesheet  is all this styles are going to 
 * be built on index.css, -index contains 'App', and applied his 
 * stylesheet to 'App'
 */
function App() {
  return (
    <>
    {/**this is the inline style for a div that contain
     * the title and a button*/}
    <div style={{padding:'2rem', backgroundColor:'#b11226'}}>
      {/**i implement the 'title' style*/}
      <h2 className='title'>Styled Components</h2>
      {/**i implement the 'btn' style*/}
      <button className='btn'>click me</button> 
    </div>
    </>
  );
}

export default App;
