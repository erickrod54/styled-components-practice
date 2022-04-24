import React from "react";
import { CssHFButton } from "./components/styles.helper.function";

/**CssHelperFunctionApp app version 1 - 'css-helper-function-app' file - 
 * Features:
 *          
 *       --> Importing and Placing 'CssHFButton' Style Button
 *           Component.
 * 
 *       --> Adding a 'large' 'Prop name' to the first Button
 *          in order to apply a CSS Helper Function to it.
 * 
 * Notes: Notice 'css' helper function is a component, 
 * different of 'css' prop that is part of 'macro'  
*/

const CssHelperFunctionApp = () => {

    return(
        <>
            <h2>Css Helper Function App</h2>
            <div style={{ padding: '2rem'}}>
                <CssHFButton large>Button with Css Helper Function</CssHFButton>
                <CssHFButton>Button with no CSS Helper Function</CssHFButton>
            </div>
        </>
    )
}

export default CssHelperFunctionApp;