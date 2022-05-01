import React from "react";
import { Wrapper } from "../more-complex-title-app/components/title.styles";
/**
 * ComplexTitle app version 1 - complex-title-app js -
 * Features: 
 * 
 *          -->Building ComplexTitle app to integrate it
 *             with 'MoreComplexPropsApp'
 * 
 * Notes: this is a simplier version of 'MoreComplexTitle'
 */

const ComplexTitle = ({ title }) => {


    return(
        <>
        <Wrapper>
            <h1>{title}</h1>
            <div className='underline'/>
        </Wrapper>
        </>
    )
}

export default ComplexTitle;