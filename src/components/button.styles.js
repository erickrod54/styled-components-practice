import styled from "styled-components";

/**Style Components app version 4 - 'button.styles' Component - 
 * Features:
 * 
 *        --> Building Style Component for 'DefaultButton'. 
 * 
 * Note: A good practice is to keep on this file the different
 * buttons that i need  for the app in order to track them
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