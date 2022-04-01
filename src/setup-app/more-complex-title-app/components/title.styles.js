import styled from 'styled-components';
import { colors } from '../../../utils';

/**More Complex Styled app version  7 - 'title.styles' sheet 
 * Component - Features:
 * 
 *        --> Building 'box' Class Style as a Custom Border.
 *        --> Applying 'border' 'Global Variable' defined on
 *            'index.css' file 
 * 
 * Note: the 'border' custom prop is build here, the color
 * can be set at ':root' element (this is using a ':root' element
 * approach, with utils approach can be customize even more
 * as is a js file)
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
    /**Here i build the 'box' Style */
    .box{
        height: 10px;
        border: var(--mainBorder);
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