import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body{
      height: 100vh;
      display: flex;
  }
  body{
      font-family: sans-serif;
      
  }
  `