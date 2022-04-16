import styled from "styled-components";
import {HipsterButton } from '../../style-component-app/components/button.styles'

/**As-prop app version 1 - 'as-prop-app' file - Features:
 * 
 *          -->Importing and Extending 'HipsterButton' Style
 *             Component - made in styled-components-app - 
 *             to create 'NewHipsterButton'. 
 * 
 * Notes: 'as' prop is a wildcard ( comodin ) and is use to
 * integrate features indicating the element that i need.
 * 
 * Using 'as' to integrate an element to another, in this case
 * the link 'a' will bring his default styles so, i have to
 * build styles to overwrite the dafault ones.
*/

export const NewHipsterButton = styled(HipsterButton)`
    /**here i set extended styles for 'HipsterButton'*/
    padding: 1rem;
    width: 150px;
    display: inline-block;
    margin: 1rem;

    /**Here i style the JSX link 'a' to overwrite
    * default styles */
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
`