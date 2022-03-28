import React from "react";
import styled from "styled-components";
//import { Wrapper } from "./components/title.styles-alt";

/**More Complex Styled app version  3 - 'MoreComplexTitle' 
 * Component - Features: (Alternative for version 2)
 * 
 *        --> Extending 'MoreComplexTitle'.
 *        --> Getting 'className' prop as 
 *            result of extending 
 *           'MoreComplexTitle'.
 * 
 * Note: The functionality stays the same, what changes is
 * the syntax implementation. Considerations:
 * 
 *          --> The style has to be extended in the 
 *              same file as the Component.
 * 
 *          --> 'TEST IT' always to know that the
 *              extended Component get the 'className'
 *              prop.
 *          
 */

/**--------------TEST IT--------------------- */
/**-----if i pass--------(props)- instead of: */

/**so i destructure the value, and the className */
const MoreComplexTitle = ({ title, className }) => {

/**---------------TEST IT--------------------- */
    //and
    //console.log(props)  /**-->i get two props: 'title' 
    //and 'classname' */  

    return(
        <>
        <h2>Complex Title app (Alternative Syntax)</h2>
        {/**Here i apply the styles */}
        <div className={className}>
            
{/**---------------TEST IT--------------------- */}
            {/**props.title */}
            <h1>{ title }</h1>
            <div className="underline">
            </div>
       </div>           
        </>
    )
}


const Wrapper = styled(MoreComplexTitle)`
    h1{
        text-transform: capitalize;
        text-align: center;
    }
    .underline{
        width: 5rem;
        height: 0.25rem;
        background: #645cff;
        margin: 0 auto;
    }
`

export default Wrapper;
