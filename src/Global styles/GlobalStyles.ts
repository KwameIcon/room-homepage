// Import necessary modules
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
        scrollbar-width: none; /* Remove scrollbar width for consistency */
    }

    /* Global styles for the body element */
    body {
        width: 100%; /* Ensure body takes full width of the viewport */
        overflow-x: hidden; /* Hide horizontal overflow */
        font-family: ${({ theme }) => theme.typography.fontFamily}; /* Set font family from theme */
        font-size: 12px; /* Set base font size */
        margin: 0; /* Remove default margin */
        padding: 0; /* Remove default padding */
        color: ${({ theme }) => theme.colors.veryDarkGray}; /* Set text color from theme */
        background-color: ${({ theme }) => theme.colors.black}; /* Set background color from theme */
    }

    /* Global styles for anchor (link) elements */
    a {
        color: ${({ theme }) => theme.colors.black}; /* Set link color from theme */
        text-decoration: none; /* Remove default underline decoration */
    }

    /* Global styles for list items */
    li {
        list-style-type: none; /* Remove default list item bullet */
    }
`;

// Export the GlobalStyles component
export default GlobalStyles;
