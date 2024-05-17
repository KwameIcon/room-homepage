import styled from "styled-components";

export const StyledMenu = styled.div`
  height: 100%;
  font-size: 16px;

  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
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
