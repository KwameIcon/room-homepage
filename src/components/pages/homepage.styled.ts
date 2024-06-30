import styled from "styled-components";


export const StyledHomepage = styled.main`
    max-width: 1440px;
    margin: auto;
    overflow: hidden;


    @media screen and (max-width:768px) {
        position: relative;
        max-width: 768px;
        height: fit-content;
        background: #FFFFFF;
    
        @media screen and (max-width: 375px) {
            max-width: 373px;
        }
    }

`