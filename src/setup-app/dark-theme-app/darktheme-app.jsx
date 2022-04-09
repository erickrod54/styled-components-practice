import React, { useState } from "react";
import GlobalStyles from "../../global-styles";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./data";
import { BaseTheme } from "./data";
import { Container } from "./components/styled.components";

/**DarkTheme app version  1 - 'DarkThemeApp' Component - 
 * Features:
 * 
 *        --> Building 'DarkThemeApp' Component.
 * 
 *        --> Building State to toggle between 'BaseTheme' and 
 *           'DarkTheme'.
 * 
 *        --> Importing and Placing 'GlobalStyles' to set global 
 *            styles. 
 * 
 *        --> Importing and Placing 'Container' Style Component.
 * 
 *        --> Importing 'ThemeProvider' Component to provide props
 *            for 'DarkThemeApp'.
 * 
 * Note: this app is about implementing Theming from 
 * 'styled-components' library, speifically 'ThemeProvider' 
 * Component in order to build a 'DarkTheme' app
 * 
 */

const DarkThemeApp = () => {
    
    /**here i build the state to toggle 'baseTheme' and 
     * 'setTheme' */
    const [baseTheme, setTheme] = useState(false);

    /**Here i build the 'toggleTheme' to set the opposite
     * value of 'baseTheme' */
    const toggleTheme = () => {
      setTheme(!baseTheme)
    }

    return(
        <>
       {/**As value i set a condition to toggle based in 
        * the value */}
        <ThemeProvider 
                theme={baseTheme ? BaseTheme : DarkTheme}>
            {/**Placing the Styles for the app */}        
            <GlobalStyles />
            <Container>
                <h1>Hello World</h1>
                {/**this button will trigger the toggle between
                 * BaseTheme and DarkTheme using baseTheme as 
                 * value 'true' or 'false' state */}
                <button 
                    onClick={toggleTheme} 
                    className='btn'>toggle me</button>
            </Container>
        </ThemeProvider>
        </>
    )
}

export default DarkThemeApp;