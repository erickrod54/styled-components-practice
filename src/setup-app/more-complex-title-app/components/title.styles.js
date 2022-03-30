import styled from 'styled-components';

/**More Complex Styled app version  4 - 'title.styles' sheet 
 * Component - Features:
 * 
 *        --> Building a class Style 'title' that will 
 *            overwrite class Style 'title' from 'Global
 *            Styles' sheet 
 * 
 * Note: As the classes written on the Style Component -for
 * this case Wrapper- are more sprecifics -every component has
 * the className id, that is unique- the 'Specific Style Class' 
 * overwrite 'Global Styles' 
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