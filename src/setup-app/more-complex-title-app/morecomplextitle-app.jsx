import React from "react";
import { Wrapper } from "./components/title.styles";
import RandomUnderline from "./random-underline.component";

/**More Complex Styled app version  4 - 'MoreComplexTitle' 
 * Component - Features:
 * 
 *        --> Building a JSX 'h1' element and applying a 
 *            Style class 'title'.
 * 
 *        --> Overwriting Style class 'title' by applying it
 *            on 'Wrapper' Component.
 * 
 *        --> Adding a Style class 'bg-redwine-shade' to 
 *            'Wrapper' Component      
 * 
 * Note: The 'Global Styles' topic is about a style that belong
 * to the Global Style sheet -this case index.css -, this case
 * i have a Style class 'title' that bring me all the styles and
 * applied it to an JSX 'h1' and in order to modify that 'Global
 * Styles' i have to define that same Style class 'title' on my
 * 'Wrapper' Component and modify it
 */

const MoreComplexTitle = ({ title }) => {

    return(
        <>
        <h2>Complex Title app</h2>
        <Wrapper className="bg-redwine-shade">
            <h1>{title}</h1>
            <div className="underline">
            </div>
            <h2 className="title">Be the best</h2>
        </Wrapper>
        <RandomUnderline />
        </>
    )
}

export default MoreComplexTitle;
