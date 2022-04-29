import { createGlobalStyle } from "styled-components";

/**MoreComplexPropsApp version 1 - 'MoreComplexPropsStyles' 
 * file - Features:
 * 
 *        --Building 'MoreComplexPropsStyles' Style Component,
 *          to set Global styles.
 * 
 * Notes: By this moment i only place colors in component
 * 
 * */

const MoreComplexPropsStyles = createGlobalStyle`
  :root{
      --crimson-red: #9B0000;
      --blood-red: #6D0000;
      --dark-blood-red: #580000;
      --dark-chocolate: #430000;
      --raisin-black: #242124;
      --ligth-black:#1A1110;
     }
`

export default MoreComplexPropsStyles;
