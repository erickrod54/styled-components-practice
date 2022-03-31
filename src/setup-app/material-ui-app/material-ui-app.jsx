import React from "react";
/**here i import 'Button' */
import { Button } from  '@mui/material';
/**Here i import the Button that i extended */
import { StyledBtn } from "./components/button.style.mui";

/**Style Components app version  6 - MuiApp Component - Features:
 *        --> Importing a Button component form MUI
 *        --> Extending Styles to customize 'Button' to 'StyleBtn' 
 * 
 * Note: MUI stands for material ui - wonderfull material 
 * components that i can integrate with react :)
 */

const MuiApp = () => {
    return(
        <>
            <div style={{ padding: '2rem'}}>
                <h2>extend material-ui button</h2>
                {/**here i set de button from MUI */}
                <Button 
                    color='primary' 
                    variant="contained">Hello World</Button>
                {/**here i customize the 'Button' to 'StyleBtn' */}
                <StyledBtn 
                    variant="contained">Hello Styled Btn</StyledBtn>
            </div>
        </>
    )
}

export default MuiApp;