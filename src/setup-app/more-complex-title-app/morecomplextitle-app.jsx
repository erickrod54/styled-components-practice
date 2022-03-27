import React from "react";
import { Wrapper } from "./components/title.styles";
import RandomUnderline from "./randomtitle.component";

/**More Complex Styled app version  2 - 'MoreComlexTitle' 
 * Component - Features:
 * 
 *        --> Importing and Placing 'RandomUnderline' 
 *            Component
 * 
 * Note: The awesome fact of this implementation is that i won't 
 * have class name bugs styled-components generates unique class 
 * names concerning to duplication, overlap or misspellings.
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
        <RandomUnderline />
        </>
    )
}

export default MoreComplexTitle;
