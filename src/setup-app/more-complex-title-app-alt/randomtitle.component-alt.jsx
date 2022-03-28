import React from "react";
import { WrapperRandom } from "./components/title.styles-alt";

/**More Complex Styled app version  3 - 'RandomUnderline' 
 * Component - Features: (Alternative for version 2)
 * 
 *        --> Building 'RandomUnderline' Component.
 *        --> Importing 'WrapperRandom' to wrap a 'div'
 *            with the classname 'underine'
 * 
 * Note: I don't extend 'Wrapper' to 'WrapperRandom' because
 * i'll need just the 'Wrapper' > 'underline' style
 */

const RandomUnderline = () => {

    return(
        <>
        <WrapperRandom>
            <div className="underline" />
        </WrapperRandom>
        </>
    )
}

export default RandomUnderline;