/**DarkTheme app version  1 - 'styled.components' js file - 
 * Features:
 * 
 *        --> Building 'Container' Styled Component.
 * 
 * Note: this app is about implementing Theming from 
 * 'styled-components' library, speifically 'ThemeProvider' 
 * Component in order to build a 'DarkTheme' app
 *
 * In order to set 'color' and 'background' to 'Container' 
 * Component i pass it as 'props' by using 'theme'
 * 
 * --------theme is a prop from 'ThemeProvider' that gives me
 * --------access directly to the data that i need. 
 */
import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`