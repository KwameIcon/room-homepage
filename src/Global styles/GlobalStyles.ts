// styles/GlobalStyles.js
import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    ::before,
    ::after {
      margin: 0;
      padding: 0;
      scrollbar-width: none;
    }

  body {
    width: 100%;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 12px;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.veryDarkGray};
    background-color: ${({ theme }) => theme.colors.black};
  }

  a{
    color: ${({theme}) => theme.colors.black};
    text-decoration: none;
  }

  li{
    list-style-type: none;
  }

`;

export default GlobalStyles;
