import styled from "styled-components";

// Interface to define the prop type for the styled component
interface StyledMenuProp {
  isMenuDisplayed: boolean;
}

// Styled component for the Menu
export const StyledMenu = styled.div<StyledMenuProp>`
  // Main container styling
  height: 100%;
  font-size: 16px;

  // Responsive styles for screens with max width of 375px
  @media screen and (max-width: 375px) {
    position: fixed;
    inset: 0;
    width: 375px;
    height: 110px;
    z-index: 100;
    visibility: ${({ isMenuDisplayed }) => isMenuDisplayed ? 'visible' : 'hidden'};
    opacity: ${({ isMenuDisplayed }) => isMenuDisplayed ? '1' : '0'};
    transition: visibility 0s, opacity 0.3s linear;

    // Unordered list styling for mobile view
    ul {
      position: absolute;
      width: 100vw;
      height: 110px;
      left: 0px;
      top: 0px;
      padding-left: 50px;
      background: #FFFFFF;
      z-index: 100;

      // List item styling for mobile view
      li {
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }

  // Unordered list styling
  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

    // Image styling inside the list
    img {
      display: none;
      margin-right: 70px;
      margin-left: -55px;
      cursor: pointer;

      @media screen and (max-width: 375px) {
        display: block;
      }

      @-moz-document url-prefix(){
        margin-left: -35px;
        margin-right: 40px;
      }
    }
  }

  // List item styling
  li {
    color: ${({ theme }) => theme.colors.white};
    height: 15px;
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 15px;
    letter-spacing: -0.666667px;
    position: relative;
    padding-bottom: 5px;

    // Hover effect for list items
    &:hover {
      cursor: pointer;

      &::after {
        width: 100%;
      }
    }

    // Pseudo-element for underline effect
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #fff;
      transition: width 0.3s ease-in-out;

      @media screen and (max-width: 375px) {
        background-color: #000;
      }
    }
  }
`;
