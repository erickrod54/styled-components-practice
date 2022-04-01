import React from "react";
import { Wrapper } from "./components/title.styles";
import RandomUnderline from "./random-underline.component";

/**More Complex Styled app version  7 - 'MoreComplexTitle' 
 * Component - Features:
 * 
 *        -->Applying a 'box' class style defined on 'Wrapper'
 *          Class Component.      
 * 
 * Note: the 'box' style class use a 'border' prop defined as 
 * 'Global Variable' ( using first approach targeting ':root' 
 * element )
 */

const MoreComplexTitle = ({ title }) => {

    return(
        <>
        <h2>Complex Title app</h2>
        <Wrapper className="bg-redwine-shade">
            <h1>{title}</h1>
            <div className="underline">
            </div>
            <div className="box" />
            <h2 className="title">Be the best</h2>
        </Wrapper>
        <RandomUnderline />
        </>
    )
}

export default MoreComplexTitle;
