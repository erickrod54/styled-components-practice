/**first i import 'createGlobalStyle'*/
import { createGlobalStyle } from "styled-components";

/**Card app version  3 - 'global-styles' js file - Features:
 * 
 *        --> Implementing 'Globlal Setup' with Style Components.
 * 
 * Note: This is an alternative to the 'Global Styles' sheet -
 * index.css - and this alternative made use of Styled 
 * Components.
 * 
 * --this implementation can be done for some cases where 
 * --i cannot use the index css sheet, so this will suit well
 */

/**here after using 'createGlobalStyle' */
/**i can take the global styles and using them here */

const GlobalStyles = createGlobalStyle`
    /** i copy :root and body styles from 'index' css 
    * reference - index css */
    :root{
      --primary: yellowgreen;
       /*Here i build a 'Global VAriable' to customize it**/
      --mainBorder:1px solid whitesmoke;
      --cardBackGround: white;
      --paraGraph: 	#9400D3;
     }
    
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: #f2f4f8;
    }
`

export default GlobalStyles;
