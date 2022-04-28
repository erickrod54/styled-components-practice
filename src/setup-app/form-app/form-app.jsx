import React from "react";
import "styled-components/macro";
import { FormButton, BasicInput } from "./components/form.styles";

/**Form-app version 2 - 'form-app' file - Features:
 * 
 *          -->Importing and Placing 'BasicInput'.
 * 
 *          -->Setting a 'type' and 'placeholder' for
 *              email 'BasicInput'.
 * 
 * Note: email 'BasicInput' is the only different, because
 * is based on the conditionally 'attrs'.
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
                    <BasicInput />
                    <BasicInput />
                    <BasicInput />
                    <BasicInput type='email' placeholder='enter email'/>
                    {/**inspecting will keep 'submit' */}
                    <FormButton type='submit'>submit here</FormButton>
                </form>
        </>
    )
}

export default FormApp;