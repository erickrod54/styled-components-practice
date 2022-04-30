import React from "react";
import ComplexTitle from "../../complex-title-app/complex-title-app";

import { products } from "../data";
import SingleProduct from "./single-product.component";

/**MoreComplexPropsApp version 2 - 'products' Component
 * - Features:
 * 
 *        -->Building 'Products' Component.
 * 
 *        -->Importing and Placing 'ComplexTitle' 
 *           to set a title for 'Products'.
 * 
 *        -->Importing and Placing 'SingleProduct' 
 *           Component in order to display each product.
 * 
 * Notes: 'List' Component is going to display a list of items,
 * and they are going to be conditionally styled, Importing and
 * placing 'MoreComplexPropsStyles' to set styles for the app
 * 
 * */

const Products = () => {

    return(
        <>
        <section>
            {/**here i place 'ComplexTitle' with title 'prop'*/}
            <ComplexTitle title='All Products'/> 
            {products.map((product) => {

                {/**here i place SingleProduct and spread all 
                his props by 'id' */}
                return <SingleProduct {...product} key={product.id}/>
            })}   
        </section>
        </>
    )
}

export default Products;