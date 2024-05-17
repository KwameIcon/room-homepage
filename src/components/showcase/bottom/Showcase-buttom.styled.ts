import styled from "styled-components";

export const StyledShowcaseBottom = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: absolute;
    height: 266px;
    left: 0px;
    top: 534px;
    overflow: hidden;



    .about-darkness{
        /* width: 420px; */
        width: 30%;
        height: 266px;


    }

    .furniture-info{
        /* width: 490px; */
        width: 40%;
        height: 100%;
        background-color: ${({theme}) => theme.colors.white};
        display: flex;
        justify-content: center;
        align-items: center;



        div{
            width: 400px;
            margin: 0px 20px;
            height: 139px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            h6{
                height: 22px;
                font-family: 'League Spartan';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 22px;
                text-align: justify;
                letter-spacing: 5px;
                color: #000000;
            }

            p{
                font-family: 'League Spartan';
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 22px;
                letter-spacing: -0.333333px;
                color: #A0A0A0;
            }
            
        }

    }

    .about-light{
        /* width: 440px; */
        width: 30%;
        height: 266px;
        left: 1000px;
        top: 534px;
    }
`