import styled from 'styled-components';
import { colors } from '../../../utils';
import { setupBorder } from '../../../utils';

/**More Complex Styled app version  8 - 'title.styles' sheet 
 * Component - Features:
 * 
 *        --> Importing 'setupBroder' functionality and setting
 *            as 'box-alt' border prop.
 *        --> Setting values for 'setupBorder'.
 * 
 * Note: 'box-alt' Class Style will use 'Global Variable' to
 * set a Custom 'border', this will be done using the second
 * approach 'utils' -refer to 'utils js' file-
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
    /**---this styles are applied to 'AlternativeTitle'
    ***----Component-------------------------------- */
    .underline-alt{
        width: 5rem;
        height: 0.25rem;
        background: ${colors.primary};
        margin: 0 auto;
    }
    .box-alt{
        width: 48rem;
        height: 10px;
        margin: 0 auto;
        border: ${setupBorder({width:5, type: 'solid', color:'black'})};
    }
    /**-------------------------------------------- */
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