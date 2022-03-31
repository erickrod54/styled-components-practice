import styled from 'styled-components';
/**Style Components app version 7 - 'title.styles' Component - 
 * Features:
 * 
 *        --> Changing 'export'. 
 * 
 * Note: A good practice is to keep on this file the different
 * titles that i need  for the app in order to track them
 */

/**here i change the export from implicit to explicit */
export const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  /**Here i only destructure it with the exact name and accesed*/
  //color:${({ customPurple }) => customPurple && '#e2bfd2'}
  /**Here i destructure it the same way but i set a ternary operator
  * to condition the style for element who posses or not CustomPurple*/
  color:${({ customPurple }) => customPurple ? '#e2bfd2' : '#9e934d'}
`