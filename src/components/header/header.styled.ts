import styled from "styled-components";

type displayMenuProps = {
  displayMenu: boolean;
}

export const StyledHeader = styled.div<displayMenuProps>`
  position: fixed;
  width: 362px;
  height: 15px;
  left: 0px;
  top: 63px;
  z-index: 10;
  background: transparent;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 375px) {
    width: 100vw;


    .overlay{
        position: fixed;
        inset: 0;
        width: 100%;
        height: 1538px;
        background: rgba(0, 0, 0, 0.4);
        z-index: 10;
        visibility: ${({ displayMenu }) => displayMenu ? 'visible' : 'hidden'};
    }
  }

  & > img:nth-child(2) {
    display: none;

    @media screen and (max-width: 375px) {
      display: block;
      position: absolute;
      width: 20px;
      height: 14px;
      left: 24px;
      top: 0px;
      color: #000;
      cursor: pointer;
    }
  }

  & > :nth-child(3) {
    width: 61.72px;
    height: 13.06px;

    @media screen and (max-width: 375px) {
      width: 61.72px;
      height: 13.06px;
    }
  }

  & > :last-child {
    @media screen and (max-width: 375px) {
      visibility: ${({ displayMenu }) => displayMenu ? 'visible' : 'hidden'};
    }
  }
`;
