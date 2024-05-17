import styled from "styled-components";

export const StyledHeader = styled.div`
    position: fixed;
    width: 362px;
    left: 64px;
    top: 55px;
    background: transparent;
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    z-index: 100;
    height: 15px;


    @media screen and (max-width: 375px) {
        width: 194.72px;
        height: 14px;
        top: 48px;
    }



`