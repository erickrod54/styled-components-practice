import styled from "styled-components";

/**Card app version  3 - style.component js file - Features:
 * 
 *        --> Implementing Pseudo element on level 1
 *            'footer' > 'h4' > '&::before'.
 * 
 * Note: in this case i'm adding a psuedo element to set
 * a string on level before the 'h4' renders, this '&::'
 * pseudo element syntax has multiple choices depending on 
 * the need.
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
            /**Here i set the pseudo element
             *to render the string 'Name' before 'h4' */
            &::before{
                content: 'Name: ';
                color: blueviolet;
            }
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
