import React from "react";
import { Wrapper } from "./components/title.styles";

/**More Complex Styled app version  8 - 'alternativetitle' 
 * Component- Features:
 * 
 *        -->Building a JSX 'div' element to apply 'box-alt'
 *          Style Class to it
 * 
 * Note: 'box-alt' Class Style will use 'Global Variable' to
 * set a Custom 'border', this will be done using the second
 * approach 'utils' -refer to 'utils js' file-
 */

 
 const AlternativeTitle = ({ title }) => {
 
     return(
         <>
         <Wrapper>
             <h1>{title}</h1>
             <div className="underline-alt" />
             <div className="box-alt" />
         </Wrapper>
         </>
     )
 }
 
 export default AlternativeTitle;