import styled from 'styled-components';


export const StyledShowcaseTop = styled.section`
    max-width: 1440px;
    max-height: 530px;
    display: flex;
    position: relative;

    @media screen and (max-width:375px) {
        max-width: 375px;
        min-height: 800px;
        flex-flow: wrap;
    }

    .image-container{
        width: 840px;
        height: 100%;
        flex-shrink: 0;
        overflow: hidden;

        @media screen and (max-width: 375px) {
            width: 375px;
            height: 360px;
        }
    }

    .actions{
        position: absolute;
        width: 160px;
        height: 80px;
        left: 840px;
        top: 454px;

        & > :nth-child(1){
            position: absolute;
            left: 0;
            z-index: 10;

            &:hover{
                color: ${({theme}) => theme.colors.darkGray};
                cursor: pointer;
            }
        }
        & > :nth-child(2){
            position: absolute;
            right: 0;
            z-index: 10;

            &:hover{
                color: ${({theme}) => theme.colors.darkGray};
                cursor: pointer;
            }
        }

        @media screen and (max-width: 375px) {
            width: 112px;
            height: 56px;
            left: 263px;
            top: 304px;
            
            & > :nth-child(1){
                width: 56px;
                height: 56px;
                z-index: 0;
            }
            & > :nth-child(2){
                width: 56px;
                height: 56px;
                z-index: 0;

            }
        }
    }


    .text-content{
        position: relative;
        width: 600px;
        height: 534px;
        padding: 0px 25px 0px 55px;
        background-color: ${({theme}) => theme.colors.white};
        display: flex;
        gap: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        @media screen and (max-width: 375px) {
            padding-left: 30px;
            margin-top: -50px;
            max-width: 375px;
            max-height: 278px;
        }

        h3{
            font-style: normal;
            font-weight: ${({theme}) => theme.typography.fontWeight.bold};
            font-size: 48px;
            line-height: 44px;
            letter-spacing: -2px;
            color: ${({theme}) => theme.colors.veryDarkGray};

            @media screen and (max-width: 375px) {
                font-style: normal;
                font-weight: 600;
                font-size: 40px;
                line-height: 37px;
                letter-spacing: -1.66667px;
                color: ${({theme}) => theme.colors.black};
            }
        }

        p{
            font-style: normal;
            font-weight: ${({theme}) => theme.typography.fontWeight.regular};
            font-size: 16px;
            line-height: 22px;
            letter-spacing: -0.333333px;
            color: ${({theme}) => theme.colors.darkGray};

        }

        button{
            position: absolute;
            gap: 10px;
            left: 10%;
            right: 42%;
            bottom: 22%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border: none;
            background-color: #fff;

            span{
                font-style: normal;
                font-weight: ${({theme}) => theme.typography.fontWeight.regular};
                font-size: 15px;
                line-height: 16px;
                letter-spacing: 12.5px;
                text-transform: uppercase;
                color: ${({theme}) => theme.colors.veryDarkGray};
                transition: 0.3s ease-in;

                &:hover{
                    color: ${({theme}) => theme.colors.darkGray};
                    cursor: pointer;
                }

                @media screen and (max-width:375px) {
                    font-size: 15px;
                }
            }

            img{
                width: 40px;
                height: 12px;
                transition: 0.3s ease;

                &:hover{
                    opacity: 0.5;
                    cursor: pointer;
                }
            }

            @media screen and (max-width: 375px) {
                width: 80%;
                left: 9%;
                bottom: -8px;
                text-align: left;

            }
        }
    }
`