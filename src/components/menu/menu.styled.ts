import styled from "styled-components";

interface StyledMenuProp {
  isMenuDisplayed: boolean;
}

export const StyledMenu = styled.div<StyledMenuProp>`
  height: 100%;
  font-size: 16px;

  @media screen and (max-width: 375px) {
    position: fixed;
    inset: 0;
    width: 375px;
    height: 110px;
    z-index: 100;
    visibility: ${({ isMenuDisplayed }) => isMenuDisplayed ? 'visible' : 'hidden'};
    opacity: ${({ isMenuDisplayed }) => isMenuDisplayed ? '1' : '0'};
    transition: visibility 0s, opacity 0.3s linear;

    ul {
      position: absolute;
      width: 100vw;
      height: 110px;
      left: 0px;
      top: 0px;
      padding-left: 50px;
      background: #FFFFFF;
      z-index: 100;

      li {
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }

  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

    img {
      display: none;
      margin-right: 70px;
      margin-left: -55px;

      @media screen and (max-width: 375px) {
        display: block;
      }
    }
  }

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

    &:hover {
      cursor: pointer;

      &::after {
        width: 100%;
      }
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #fff;
      transition: width 0.3s ease-in-out; 
    }
  }
`;
