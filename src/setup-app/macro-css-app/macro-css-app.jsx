import React from "react";
import { NewHipsterButton } from "../as-prop-app/components/styles.components";
import "styled-components/macro";

/**Macro css app version 1 - 'macro-css-app' file - Features:
 *          
 *          -->Importing styled 'macro' from 'styled-components'
 *              library.
 * 
 *          -->Importing and Placing 'NewHipsterButton' Style
 *             Component.
 * 
 *          --> Applying styles using macro color 'blue' to 
 *             'NewHipsterButton' Style Component.
 * 
 *          --> Building a JSX 'div' element and Styling it
 *              using macro css color 'green'. 
 * 
 * Notes: In order to apply macro css the use of the syntax:
 * 
 *              css={`color:blue`}
 *      ---in this case i change the color--
 * 
 * must be always together with:
 *      
 *      'import styled from "styled-components/macro";'
 * 
 * Very important when i inspect both 'NewHipsterButton' and
 * JSX 'div' element i get friendly name style classes (
 * more friendly for JSX elements) 
*/

const MacroCssApp = () => {

    return(
        <>
        <div style={{ padding: '2rem'}}>
            <h2>Macro Css App</h2>
            {/**Here i apply 'macro css' to 'NewHipsterButton'*/}
                <NewHipsterButton css={`color:blue`}>
                    Macro css styled
                </NewHipsterButton>
            
            {/**Here i apply 'macro css' to JSX 'div' element*/}
                <div css={`color:green`}>
                    <h2>Hello World</h2>
                </div>
        </div>
        </>
    )
}

export default MacroCssApp;