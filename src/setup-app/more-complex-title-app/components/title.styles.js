import styled from 'styled-components';

/**More Complex Styled app version  2 - 'title.styles' sheet 
 * Component - Features:
 * 
 *        --> Building 'WrapperRandom' Styled Component.
 *        --> Building a 'underline' class style 
 * 
 * Note: I don't extend 'Wrapper' to 'WrapperRandom' because
 * i'll need just the 'Wrapper' > 'underline' style
 * 
 * the awesome fact of this implementation is that i won't have
 * class name bugs styled-components generates unique class 
 * names concerning to duplication, overlap or misspellings.
 */

export const Wrapper = styled.div`
    h1{
        text-transform: capitalize;
        text-align: center;
    }
    .underline{
        width: 5rem;
        height: 0.25rem;
        background: #645cff;
        margin: 0 auto;
    }
`

export const WrapperRandom = styled.div`
    .underline{
        width: 5rem;
        height: 0.5rem;
        background: red;
        margin: 4rem auto;
    }
`