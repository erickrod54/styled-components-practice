import styled, { css } from "styled-components";

/**MoreComplexPropsApp version 2 - 'styled.components' 
 * Component - Features:
 * 
 *        -->Building 'AppPropsWrapper'
 * 
 * Notes: 'price' prop previously drilled from 
 * 'SingleProduct' i implement on it a 'css helper function'
 * to set 'color' selectivly to the price - p tag -
 * */

export const Fruit = styled.li`
    list-style-type:none;
    /**this is the css helper function */
    ${({odd})=>{
        return odd ? css`
                color: white ;
                background: var(--crimson-red);
                font-size: 1.5rem;
                /**padding also change the height */
                padding: 1.5rem;
                
            ` : css`
                color: var(--raisin-black);
                padding: 1rem;
            `
    }}
`

export const AppPropsWrapper = styled.article`
    width: 300px;
    background: #fff;
    padding: 1rem;
    border-radius: 0.25rem;
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4{
        text-transform: capitalize;
    }
    p{
      color: ${({ price }) => {
             if (price < 300) return 'green'
             if (price >= 300) return 'red'   
            return '#222'
        }}
    }
`