import React from "react";
import styled, { css } from "styled-components";
import { fruits } from "../data";
import { Fruit } from "./styled.components";

/**MoreComplexPropsApp version 1 - 'more-complex-props-app' 
 * file - Features:
 * 
 *        -->Building 'List' Component
 * 
 *        -->Importing 'fruits' data, mapping it and render it.
 * 
 *        -->Destructuring 'index' to calculate the 'odd' render.  
 * 
 * Notes: 'List' Component is going to display a list of items,
 * and they are going to be conditionally styled.
 * 
 *      'odd' is 'impar' for this case
 * 
 * */


const List = () => {

    return(
        <>
        <div style={{padding: '2rem'}}>
            <div>
                <h2>Simple List</h2>
                {fruits.map((fruit, index) => {
                   
                    return(
                        <Fruit 
                            key={index} 
                            odd={(index + 1) % 2 !== 0}
                            > {fruit} </Fruit>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default List;