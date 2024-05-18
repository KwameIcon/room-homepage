import styled from "styled-components";

// Type definition for the props to control menu display
type displayMenuProps = {
  displayMenu: boolean;
}

// Styled component for the Header
export const StyledHeader = styled.div<displayMenuProps>`
    position: fixed;
    z-index: 10; // Ensures the header is above other elements
    background: transparent;
    display: flex;
    gap: 20px; // Space between child elements
    justify-content: space-evenly; // Evenly distribute child elements
    align-items: center; // Center align items vertically
    width: 362px;
    height: 15px;
    left: 64px;
    top: 63px;

    // Responsive styles for screens with max width of 375px
    @media screen and (max-width: 375px) {
        width: 100vw; // Full viewport width

        // Overlay for mobile menu background
        .overlay{
            position: fixed;
            inset: 0; // Cover the entire screen
            width: 100%;
            height: 1538px; // Full height of the menu
            background: rgba(0, 0, 0, 0.4); // Semi-transparent black background
            z-index: 10; // Ensure overlay is above other elements
            visibility: ${({ displayMenu }) => displayMenu ? 'visible' : 'hidden'}; // Control visibility based on prop
        }
    }

    // Styles for the second child element (mobile menu icon)
    & > img:nth-child(2) {
        display: none; // Hide by default

        @media screen and (max-width: 375px) {
            display: block; // Show on small screens
            position: absolute;
            width: 20px;
            height: 14px;
            left: -50px; // Position adjustments
            top: 0px;
            color: #000;
            cursor: pointer; // Change cursor to pointer
        }
    }

    // Styles for the third child element (logo or other element)
    & > :nth-child(3) {
        width: 61.72px;
        height: 13.06px;

        @media screen and (max-width: 375px) {
            width: 61.72px;
            height: 13.06px;
            margin-left: -50px; // Adjust margin for mobile view
            margin-right: 100px;
        }
    }

    // Styles for the last child element (menu items)
    & > :last-child {
        @media screen and (max-width: 375px) {
            visibility: ${({ displayMenu }) => displayMenu ? 'visible' : 'hidden'}; // Control visibility based on prop
        }
    }
`;
