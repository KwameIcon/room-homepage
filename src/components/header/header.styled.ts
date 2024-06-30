import styled from "styled-components";

// Type definition for the props to control menu display
type displayMenuProps = {
  displayMenu: boolean;
};

// Styled component for the Header
export const StyledHeader = styled.div`
  position: fixed;
  z-index: 10;
  background: transparent;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
  width: 26%;
  height: 20px;
  left: 64px;
  top: 63px;

  @media screen and (max-width: 375px) {
    width: 100vw;
  }
`;

export const Overlay = styled.div<displayMenuProps>`
  @media screen and (max-width: 375px) {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 1538px;
    background: rgba(0, 0, 0, 0.4);
    z-index: 10;
    visibility: ${({ displayMenu }) => (displayMenu ? 'hidden' : 'visible')};
  }
`;

export const HamburgerIconWrapper = styled.img`
  display: none;

  @media screen and (max-width: 375px) {
    display: block;
    position: absolute;
    width: 20px;
    height: 14px;
    left: -50px;
    top: 0px;
    z-index: 100;
    color: #000;
    cursor: pointer;
  }
`;
export const CloseIcon = styled.img`
  display: none;

  @media screen and (max-width: 375px) {
    display: block;
    position: absolute;
    width: 20px;
    height: 14px;
    left: -50px;
    top: 0px;
    z-index: 100;
    color: #000;
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  width: 61.72px;
  height: 13.06px;

  @media screen and (max-width: 375px) {
    width: 61.72px;
    height: 13.06px;
  }
`;

export const MenuWrapper = styled.div<displayMenuProps>`
  @media screen and (max-width: 375px) {
    visibility: ${({ displayMenu }) => (displayMenu ? 'visible' : 'hidden')};
  }
`;
