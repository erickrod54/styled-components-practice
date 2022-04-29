import styled, { css } from "styled-components";

/**MoreComplexPropsApp version 1 - 'more-complex-props-app' 
 * file - Features:
 * 
 *        -->Building 'Fruit' Style Component.
 * 
 *        -->Building css helper function to set styles
 *          conditionally base on the 'odd' item.
 * 
 * Notes: 'List' Component is going to display a list of items,
 * and they are going to be conditionally styled, Importing and
 * placing 'MoreComplexPropsStyles' to set styles for the app
 * 
 * */

export const Fruit = styled.li`
    list-style-type:none;
    /**this is the css helper function */
    ${({odd})=>{
        return odd ? css`
                color: white ;
                background: var(--crimson-red);
                font-size: 1.5rem;
                /**padding also change the height */
                padding: 1.5rem;
                
            ` : css`
                color: var(--raisin-black);
                padding: 1rem;
            `
    }}
`