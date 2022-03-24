import styled from "styled-components";

/**Style Components app version 5 - 'button.styles' Component - 
 * Features:
 * 
 *        --> Building Extend Styled Component for 
 *           'HpsterButton' Component. 
 * 
 * Note: The 'styled' functionality is not limited to html 
 * elements, also is applied to 'React Components' 
 * 
 *      styled() ---this is the syntax to React Components
 */


/**Here i build the Style for the 'DefaultButton' */
export const DefaultButton = styled.button`
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
`

/**Here i'm applying the style for a react Component
 * 'DefaultButton' that is the button from above
 */
export const HipsterButton = styled(DefaultButton)`
  width:400px;
  background: transparent;
  color: 	#0e1111;
  border: 2px solid #0e1111;
`