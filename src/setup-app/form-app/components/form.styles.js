import styled, { css } from "styled-components";

/**Form-app version 2 - 'form.styles' file - Features:
 * 
 *          -->Building 'css helper function' to set
 *              styles to 'submit' button
 * 
 *          -->Building 'BasicInput'.
 * 
 *          -->Implementing 'attrs' to handle 'type'
 *             and 'placeholder' for 'BasicInput'.
 * 
 * Note: as i use 'attrs' to bring the 'props.type' i can 
 * also apply a 'css helper function' to conditionally set
 * styles to a submit type
*/


export const BasicInput = styled.input.attrs((props) => {
    return{ 
        /**here i set condition to handle type and placeholder */
        type: props.type || 'text',
        placeholder: props.placeholder || 'please enter value'
    }
})`
    box-sizing: border-box;
    padding: 0.5rem;
    border: 2px solid #f2f4f8;
    border-radius: 0.25rem;
    width: 100%;
    margin-top: 1rem;
`


export const FormButton = styled.button.attrs((props) => {
    /**this is 'props.type' exists, if not default value 'button'
     * this way i handle a default 'type' prop.
    */
    return { type: props.type || 'button' }
})`
    background: var(--paraGraph);
    border: none;
    color: white;
    padding: 0.25rem;
    cursor: pointer;
    ${({type}) => {
        return type === 'submit' && css`
        display: block;
        width: 100%;
        margin-top:1rem;
        border-radius: 0.25rem;
        `
    }}
`