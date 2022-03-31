import React from "react";
import { BasicTitle } from "./components/title.styles";
import { DefaultButton } from './components/button.styles'
import { HipsterButton } from "./components/button.styles";

/**Style Components app version  7 - App js file - Features:
 *        --> Importing Explicitly Basic Title 
 * 
 * Note: This update is made to add styled app easier by mounting
 * them in App js
 */

const StyledComponentApp = () => {
    return(
    <>
    <div style={{padding:'2rem', backgroundColor:'#b11226'}}>

        {/**Inspecting with the browser will show the h1*/}
        <BasicTitle>Styled Component</BasicTitle> 
        {/**this is the title i'm going to customize*/}
        {/**i call the prop 'customPurple' */}
        <BasicTitle customPurple>Styled Component</BasicTitle> 
        <DefaultButton>click me </DefaultButton>
        {/**Here i set 'HipsterButton' */}
        <HipsterButton>Hipster Click </HipsterButton>
    </div>
    </>
    )

}

export default StyledComponentApp;