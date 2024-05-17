import styled from "styled-components";

export const StyledButton = styled.div`
    width: 80px;
    height: 80px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s ease-in;


    &:hover{
        background-color: rgb( 50, 50, 50);
        cursor:pointer;
    }



    img{
    width: 20px;
    height:30px;
    }

`