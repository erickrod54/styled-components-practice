import styled from "styled-components";

/**Card app version  1 - style.component js file - Features:
 * 
 *        --> Building 'StyleCard' Component.
 *        --> Placing '--cardBackgroundColor' to get
 *            background color form a 'Global Variable'.
 *        --> Building a 'img' Style Class to set styles
 *            to the JSX 'img' tag.
 *        -->Building 'underline' Style Class to set styles
 *           that divides JSX 'img' and 'footer' tag. 
 * 
 * Note: This Component will be applied to set a 'Global Variable'
 * Style class using utils approach 
 * 
 * 'assets' must be always on 'src' directory
 */

export const StyledCard = styled.article`
    width: 90vw;
    max-width: 300px;
    background: var(--cardBackGround);
    border-radius: 0.25rem ;
    img {
        width: 100%;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }
    .underline{
        width: 18rem;
        height: 0.1rem;
        background: black;
        margin: 2rem auto;
    }
`
