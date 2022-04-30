import React from "react";
import { AppPropsWrapper } from './styled.components'

/**MoreComplexPropsApp version 2 - 'SingleProduct' 
 * Component - Features:
 * 
 *        -->Importing and Placing 'AppPropsWrapper' Style
 *           Component to set styles to each 
 *          'SingleProduct'.
 * 
 *        -->Destructuring 'name' and 'price' to render 
 *          them.
 * 
 * Notes: I drill 'price' prop in order to use it in
 * 'styled.components > AppPropsWrapper'
 * */

const SingleProduct = ({ name, price }) => {

    return(
        <>
            <AppPropsWrapper price={price}>
                <h4>{name}</h4>
                <p>${price}</p>
            </AppPropsWrapper>
        </>
    )
}

export default SingleProduct;