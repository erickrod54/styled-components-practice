import React from "react";
import { NewHipsterButton } from "./components/styles.components";

/**As-prop app version 1 - 'as-prop-app' file - Features:
 * 
 *          -->Importing and Placing 'NewHipsterButton' Style
 *             Component. 
 * 
 * Notes: 'as' prop is a wildcard ( comodin ) and is use to
 * integrate features indicating the element that i need.
 * 
 * This case 'NewHipsterButton' is a JSX button element in a 
 * Styled Component, but i need to use a 'href' -href is a link 
 * prop from JSX element 'a'-
 *  
*/

const AsPropApp = () => {

    return(
        <>
            <h2>As Prop Component</h2>
            {/**i implement a 'href' on a button 
             * using wildcard 'as'*/}

            <NewHipsterButton 
                as='a' 
                href='https://github.com/erickrod54'
                >ref to GitHub</NewHipsterButton>

            <NewHipsterButton>Some refs</NewHipsterButton>
            <NewHipsterButton>Some refs</NewHipsterButton>
        </>
    )
}

export default AsPropApp;
