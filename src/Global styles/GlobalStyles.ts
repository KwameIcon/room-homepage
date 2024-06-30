import { createGlobalStyle } from "styled-components";

// Define global styles using createGlobalStyle from styled-components
const GlobalStyles = createGlobalStyle`
    /* Resetting default styles for all elements */
    *,
    ::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: none; 
    }

    /* Global styles for the body element */
    body {
        width: 100%; 
        overflow-x: hidden; 
        font-family: ${({ theme }) => theme.typography.fontFamily}; 
        font-size: 12px; 
        margin: 0; 
        color: ${({ theme }) => theme.colors.veryDarkGray};
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
    }

    /* Global styles for anchor (link) elements */
    a {
        color: ${({ theme }) => theme.colors.black}; 
        text-decoration: none; 
    }

    /* Global styles for list items */
    li {
        list-style-type: none; 
    }
`;

// Export the GlobalStyles component
export default GlobalStyles;
