import React from "react";
import { StyledCard } from "./style-components/style.components";
import defaultImage from '../../assets/prisma_muestra.svg'

/**Card app version  1 - 'Card' Component - Features:
 * 
 *        --> Building 'Card' Component.
 *        --> Building a JSX 'div' elememtnet with a 
 *            className 'underline' to separate 'img'
 *            and 'footer'
 *        --> Importing a 'defaultImage' to set it on 
 *            JSX 'img' tag. 
 * 
 * Note: This Component will be applied to set a 'Global Variable'
 * Style class using utils approach 
 * 
 * 'assets' must be always on 'src' directory
 */

const Card = () => {

    return(
        <>
            <div style={{ padding: '2rem' }}> 
                <h2>Card Component</h2>
            </div>

            <StyledCard>
             <img 
                src={defaultImage}
                alt='prisma'
            />
            <div className="underline"/>
            <footer>
                <h4>project name</h4>
                <p>$100</p>
            </footer>
            </StyledCard>
        </>
    )
} 

export default Card;