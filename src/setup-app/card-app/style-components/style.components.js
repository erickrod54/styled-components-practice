import styled from "styled-components";

/**Card app version  2 - style.component js file - Features:
 * 
 *        --> Applying styles to JSX 'footer' element.
 * 
 *        --> Nesting a 'h4' element inside 'footer' to
 *            set it styles.
 * 
 *        --> Applying 'Media Query' to resize 'StyleCard'
 *            Component. 
 *  
 *        --> Applying 'Hover' effect to level 1 to change the 
 *            color on 'StylesCard > footer > h4'.
 * 
 *        --> Targeting with 'hover' StyleCard -article- to create 
 *             a box shadow effect 'StylesCard '. 
 * 
 *        --> Targeting with 'hover' JSX 'footer' element to change
 *            the 'footer' background
 * 
 * Note: the nesting is very important, is as Specific Styles
 * overwrite global Styles, if i for example leave JSX 'h4'
 * outside the footer the 'h4' styles will behave as 'Global
 * Styles' applying the styles everywhere inside and outside
 * 'footer' element, thats why the solution is nest it in
 * 'footer'
 * 
 */

export const StyledCard = styled.article`
    /**level 0 - Style Card Component */
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
    footer{
        /**align items in a row */
        display:flex;
        /**makes a space */
        justify-content: space-between;
        /**place items on center */
        align-items: center;
        /**place a padding to left and right
         *of the items */
        padding: 0 2rem;
        /**test placing it outside the 'footer'
        * will act as 'Global Style' */

        /**this style prevale because is more specific */
        h4{
            text-transform: capitalize;
            color: red;
        }
        p{
           color: var(--paraGraph);
           font-weight: 700;
        }
        /**Level 1 - here i applied 'hover' specificly to
        * ' StylesCard > footer > h4 ' */
        h4:hover{
            color: cornflowerblue;
        }
        &:hover{
            background: #D598A0;
        }
    }
    /**this style will be applied to any other 'h4' 
    * outside the 'nest'*/
    h4{
        color: black;
    }

    /**level 0 - Style Card Component - 'hover' applied
    * create a box-shadow effect */
    /**-------------------------------------------- */
    
    /**this line makes box-shadow over 0.5s */
    transition: all 0.5s ease-in-out;

    /**this is the box-shadow effect - '&' sign targets
    * the container */
    &:hover{
       box-shadow: 0 3px 3px #222;
       cursor: pointer;
    }

    /**-------------------------------------------- */    
    /**level 0 - Style Card Component - Media Query applied
    * to resize the component */
    @media (min-width:768px){
        max-width: 600px;
    }
`
