import styled from "styled-components";


export const StyledMenu = styled.div`
  height: 100%;
  font-size: 16px;

  @media screen and (max-width: 375px) {
    position: fixed;
    inset: 0;
    width: 375px;
    height: 1538px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 110;

    ul {
      position: absolute;
      width: 375px;
      height: 110px;
      left: 0px;
      top: 0px;
      padding-left: 50px;
      background: #FFFFFF;

      li {
        color: ${({theme}) => theme.colors.black};
      }
    }
  }

  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 30px;
      margin-left: -50px;
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
