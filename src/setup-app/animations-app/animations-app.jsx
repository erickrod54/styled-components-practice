import React from "react";
import { WrapperLoading } from "./components/loading.component";
import { Loading } from "./components/loading.component";

/**Animations app version 1 - 'animations-app' file - Features:
 * 
 *          -->Importing and Placing 'Loading' Styled Component.
 * 
 * Notes: this component is going to be built on 
 * 'loading.component.jsx' 
*/

const AnimationApp = () => {

    return(
        <>
            <WrapperLoading>
                <Loading />
            </WrapperLoading>
        </>
    )
}

export default AnimationApp;