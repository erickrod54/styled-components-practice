import React from "react";
import List from "./components/list.component";
import Products from "./components/products.component";
import MoreComplexPropsStyles from "../../styles.more-complex-props-app";

/**MoreComplexPropsApp version 2 - 'more-complex-props-app' 
 * file - Features:
 * 
 *        -->Importing and Placing 'Products' Component.
 * 
 * Notes: 'List' Component is going to display a list of items,
 * and they are going to be conditionally styled, Importing and
 * placing 'MoreComplexPropsStyles' to set styles for the app
 * 
 * */

const MoreComplexPropsApp = () => {

    return(
        <>
            <MoreComplexPropsStyles />
            <h2>More Complex App</h2>
            <List />    
            <Products />
        </>
    )
}

export default MoreComplexPropsApp;