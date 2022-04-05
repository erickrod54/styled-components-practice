import React from "react";
import { StyledCard } from "./style-components/style.components";
import defaultImage from '../../assets/prisma_muestra.svg'

/**Card app version  2 - 'Card' Component - Features:
 * 
 *        --> Placing an JSX 'h4' to test how styles
 *            outside the nest are applied
 * 
 * Note: The styles are built for ' StylesCard > h4 ' and 
 * for ' StylesCard > footer > h4 ' others styles are 
 * applied 
 * 
 * Adviceable no more than one level deep, for features
 * as 'media querys' can be complex to apply them
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
            <h4>Project Description</h4>
            </StyledCard>
        </>
    )
} 

export default Card;