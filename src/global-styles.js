/**first i import 'createGlobalStyle'*/
import { createGlobalStyle } from "styled-components";

/**DarkTheme app version  1 - 'global-styles' js file - 
 * Features:
 * 
 *        --> Placing on 'GlobalStyles' Component 'btn' 
 *            code.
 * 
 * Note: 'btn' class style comes from index css, i placed it here
 * to apply styles to the button on 'DarkThemeApp' Component
 */

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

/*this style is for the button**/
.btn{
  background: #171717;
  /*the color of the button text**/
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  /*the hand of the cursor**/
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  /*this property set it on center**/
  margin: 1rem auto;
}
`

export default GlobalStyles;
