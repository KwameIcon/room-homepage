import styled from "styled-components";

interface StyledMenuProps {
  displayMenu: boolean;
}

export const StyledMenu = styled.div<StyledMenuProps>`
  height: 100%;
  font-size: 16px;

  @media screen and (max-width:375px){
    visibility: ${({displayMenu}) => displayMenu === true ? 'hidden' : 'visible'};
    position: absolute;
    top: -63px;
    left: -64px;
    width: 100vw;
    height: 140px;
    z-index: 20;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.li`
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

    @media screen and (max-width: 375px) {
      background-color: #000;
    }
  }

  @media screen and (max-width:375px){
    color: #000;
  }
`;
