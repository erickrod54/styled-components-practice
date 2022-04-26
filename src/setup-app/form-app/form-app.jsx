import React from "react";
import "styled-components/macro";
import { FormButton } from "./components/form.styles";

/**Form-app version 1 - 'form-app' file - Features:
 * 
 *          -->Buildinng a Basic Form.
 * 
 *          -->Applying 'css' macro to the form.
 * 
 *          -->Importing and Placing 'FormButton'.
 * 
 * Note: 'FormButton' has applied 'attrs' feature that is
 * as native handler for props, this case it handles for
 * a demonstration props as 'type' of 'text' or 
 * submit, because 'click me' and 'submit' that has
 * two different 'types' props -text and submit- 
*/

const FormApp = () => {

    return(
        <>
            <h2>Form App</h2>
            {/**inspecting will be asigned a default 'button'*/}
            <FormButton>click me</FormButton>
            <form css={`
                width:300px; 
                background:#F26E01; 
                padding:2rem;
                margin-top:1rem;`}>
                    <h2>Form</h2>
                    <input type='text' />
                    {/**inspecting will keep 'submit' */}
                    <FormButton type='submit'>submit here</FormButton>
                </form>
        </>
    )
}

export default FormApp;