import styled from "styled-components";

export const StyledShowcase = styled.section`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:768px) {
        height: 2000px;
    }
`