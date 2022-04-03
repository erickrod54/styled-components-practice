/**More Complex Styled app version  8 - 'utils js' - Features:
 * (Alternative approach to build Global Variables)
 * 
 *        --> Building a function 'setupBorder' to set 
 *            a'Global Variable' to keep and distribute
 *            Custom border.
 * 
 * Note: this second approach works even better than targeting 
 * ':root' because here i can set a whole functionality that can
 * carry with all css props from a class (this case i'll apply
 * 'setupBroder' to 'box-alt')
 * 
 * I can also initializaed with default values as follows:
 *      
 *          ({width = 1, type = solid, color = purple}) 
 */

/**this will be the Style component that will keep the 
 * 'Global Variable' -this case 'colors'-
 */
export const colors = {
    primary: '#e5d0ff'
}

/**here i set the function */
export const setupBorder = ({width, type, color}) => {
    /**i return a interpolated value*/
    return `${width}px ${type} ${color}`
}


