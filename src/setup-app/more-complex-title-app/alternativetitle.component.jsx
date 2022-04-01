import React from "react";
import { Wrapper } from "./components/title.styles";

/**More Complex Styled app version  6 - 'alternativetitle' 
 * Component- Features:
 * 
 *        -->Building 'AlternativeTitle' Component.
 *        -->Applying 'Global Variables' 'colors' Styles using 
 *           utils approach
 * 
 * Note: this is the second approach to apply 'Global Variables'
 * Styles, the first was using ':root' element 
 */

 
 const AlternativeTitle = ({ title }) => {
 
     return(
         <>
         <Wrapper>
             <h1>{title}</h1>
             <div className="underline-alt" />
         </Wrapper>
         </>
     )
 }
 
 export default AlternativeTitle;