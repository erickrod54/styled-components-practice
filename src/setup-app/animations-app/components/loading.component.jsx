import styled, { keyframes } from "styled-components";
import '../../../index.css'

/**Animations app version 1 - 'Loading' Styled Component - 
 * Features:
 * 
 *     -->Building'Loading' Styled Component.
 * 
 *     -->Building Basic 'WrapperLoading' Styled Component
 *        to wrap the animation app.
 * 
 * Notes: after building the the square div and make it a circle 
 * thanks to 'border-radius' prop, then i set the 'border top 
 * color'
 * 
 * 'keyframes' is what make animate
 *  
*/

const spinner = keyframes`
    to{
        /**here i make it rotate 360deg */
        transform: rotate(360deg);
    }
`

export const Loading = styled.div`
    /**this first three lines make a square div */
    width: 6rem;
    height: 6rem;
    border: 5px solid #ccc;
    /**this 'border-radius' prop art 50% make a circle */
    border-radius: 50%;
    /**this prop set a color */
    border-top-color: var(--paraGraph);
    /**then at last i called the spinner here 
    *(passing the component, a speed on time, and linear infinite
    * in order to repeat it)*/
    animation: ${spinner} 0.6s linear infinite;
`

export const WrapperLoading = styled.div`
    padding: 2rem;
`