import styled from 'styled-components';
import { colors } from '../../../utils';

/**More Complex Styled app version  6 - 'title.styles' sheet 
 * Component - Features:
 * 
 *        --> Building 'underline-alt' Style Class to apply
 *            a unique color style to 'AlternativeTitle'. 
 * 
 * Note: Wrapper Style Component will wrapp AlternativeTitle will 
 * apply 'underline-alt' Style class
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
    .underline-alt{
        width: 5rem;
        height: 0.25rem;
        background: ${colors.primary};
        margin: 0 auto;
    }
    .title{
        color: blueviolet;
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