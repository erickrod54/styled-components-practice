import React from "react";
import { Wrapper } from "./components/title.styles";
/**More Complex Styled app version  1 - 'MoreComlexTitle' 
 * Component - Features:
 * 
 *        --> Building 'MoreComplexTitle' Component.
 *        --> Building 'Wrapper' styled Component.
 *        --> Applying underline class to a 'div'
 *            inside the 'Wrapper'. 
 *        --> Making a 'title' prop that will contain 
 *            the title value that later will be added on
 *            'App js' file.
 * 
 * Note: This topic 'More Complex Styled' is very important
 * because i can apply styles to a series of 'JSX' elements
 * inside the 'Wrapper' and add styles classes with no danger
 * of name colisions.
 */

const MoreComplexTitle = ({ title }) => {

    return(
        <>
        <h2>Complex Title app</h2>
        <Wrapper>
            <h1>{title}</h1>
            <div className="underline">
            </div>
        </Wrapper>
        </>
    )
}

export default MoreComplexTitle;
