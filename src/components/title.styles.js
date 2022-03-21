import styled from 'styled-components';
/**Style Components app version 4 - 'title.styles' Component - 
 * Features:
 * 
 *        --> Building Style Component for 'BasicTitle'. 
 * 
 * Note: A good practice is to keep on this file the different
 * titles that i need  for the app in order to track them
 */

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  /**the value will be the prop in template string, scoping
  * directly the name of the prop -customPurple- and the value 
  * -pruple shade #e2bfd2 -*/
  color:${(props) => props.customPurple && '#e2bfd2'}
`

export default BasicTitle