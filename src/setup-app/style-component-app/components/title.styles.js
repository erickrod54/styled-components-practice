import styled from 'styled-components';
/**Style Components app version 5 - 'title.styles' Component - 
 * Features:
 * 
 *        --> Accessing props by destructuring. 
 * 
 * Note: A good practice is to keep on this file the different
 * titles that i need  for the app in order to track them
 */

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  /**Here i only destructure it with the exact name and accesed*/
  //color:${({ customPurple }) => customPurple && '#e2bfd2'}

  /**Here i destructure it the same way but i set a ternary operator
  * to condition the style for element who posses or not CustomPurple*/
  color:${({ customPurple }) => customPurple ? '#e2bfd2' : '#9e934d'}
`

export default BasicTitle