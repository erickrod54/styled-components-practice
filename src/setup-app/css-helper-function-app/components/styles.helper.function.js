import styled, { css } from "styled-components";
import { NewHipsterButton } from "../../as-prop-app/components/styles.components";

/**CssHelperFunctionApp app version 1 - 
 * 
 * 'styles.helper.function' file - Features:
 *          
 *       --> Importing and Extending 'NewHipsterButton' 
 *           Component to make 'CssHFButton' Component.
 * 
 *       --> Importing 'css' helper function from 
 *           styled-components.
 * 
 *       --> Building css helper function in 'CssHFButton'
 *           destructuring 'large' 'Prop name' to set the
 *           condition.
 * 
 * Notes: Notice 'css' helper function is a component 
 * directly imported as a Component, different of 'css' 
 * prop that is part of 'macro'  
*/

export const CssHFButton = styled(NewHipsterButton)`

/**Here i destructure 'large' 'Prop name'*/
${({large}) => large 
/** Here i set a condition and a flow of props*/
? css`
    padding:1rem;
    font-size: 1.5rem;
    font-weight: 700;
    width: fit-content;
    color: blueviolet;
    `
 : css`
    padding:0.5rem;
    font-size: 1rem;
    font-weight: 400;
    width: fit-content;
    color: mediumseagreen;
    
 `}
`