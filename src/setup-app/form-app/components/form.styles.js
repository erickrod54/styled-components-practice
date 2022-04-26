import styled from "styled-components";

/**Form-app version 1 - 'form.styles' file - Features:
 * 
 *          -->Building 'FormButton'.
 * 
 *          --> Adding 'attrs' to handle a default type.
 * 
 * Note: 'FormButton' has applied 'attrs' feature that is
 * as native handler for props, this case it handles for
 * a demonstration props as 'type':
 * 
 *          --> 'click me' - type - 'text'
 * 
 *          --> 'submit' - type - 'submit'
 *   
*/

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
`