import styled from 'styled-components';


export const StyledShowcaseTop = styled.section`
    max-width: 1440px;
    max-height: 530px;
    display: flex;
    overflow: hidden;
    position: relative;

    @media screen and (max-width:375px) {
        max-width: 375px;
        flex-flow: wrap;
        border: 2px solid crimson;
    }

    .image-container{
        width: 840px;
        max-height: 530px;
        flex-shrink: 0;
        overflow: hidden;

        @media screen and (max-width: 375px) {
            max-width: 375px;
            margin-left: -2px;
            max-height: 360px;
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
            }
            & > :nth-child(2){
                width: 56px;
                height: 56px;

            }
        }
    }


    .text-content{
        position: relative;
        width: 600px;
        height: 534px;
        padding: 0px 25px 0px 55px;
        display: flex;
        gap: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        h3{
            font-style: normal;
            font-weight: ${({theme}) => theme.typography.fontWeight.bold};
            font-size: 48px;
            line-height: 44px;
            letter-spacing: -2px;
            color: ${({theme}) => theme.colors.veryDarkGray};
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
                font-weight: ${({theme}) => theme.typography.fontWeight.medium};
                font-size: 15px;
                line-height: 16px;
                letter-spacing: 12.5px;
                color: ${({theme}) => theme.colors.veryDarkGray};
                transition: 0.3s ease-in;

                &:hover{
                    color: ${({theme}) => theme.colors.darkGray};
                    cursor: pointer;
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
        }
    }
`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     position: relative;
//     height: 534px;
//     border: 2px solid crimson;

//     @media screen and (max-width: 375px){
//         width: 100vw;
//         border: 2px solid crimson;
//     }

//     .image-container {
//         position: relative;
//         overflow: hidden;
//         width: 70%;
//         height: 534px;
//         left: 0px;
//         top: 0px;

//         @media screen and (max-width: 375px) {
            
//         }
//     }

//     .actions {
//         position: absolute;
//         width: 160px;
//         height: 80px;
//         z-index: 10;
//         display: flex;
//         background: #000000;
//         left: 840px;
//         top: 454px;

//         @media screen and (max-width: 375px) {
//             left: 50%;
//             transform: translateX(-50%);
//             top: 450px;
//             width: 100px;
//             height: 50px;

//             button {
//                 width: 50%;
//                 img {
//                     width: 20px;
//                 }
//             }
//         }
//     }

//     .text-content {
//         position: relative;
//         padding: 0px 30px 0px 50px;
//         margin-top: -80px;
//         background: #ffffff;
//         display: flex;
//         flex-direction: column;
//         gap: 15px;
//         width: 30%;

//         h3 {
//             font-style: normal;
//             font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
//             font-size: 40px;
//             line-height: 44px;
//             letter-spacing: -2px;
//             color: ${({ theme }) => theme.colors.veryDarkGray};
//             width: 400px;

//             @media screen and (max-width: 375px) {
//                 font-size: 24px;
//                 line-height: 28px;
//                 width: 100%;
//                 text-align: center;
//             }
//         }

//         p {
//             font-style: normal;
//             font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
//             line-height: 22px;
//             letter-spacing: -0.333333px;
//             color: ${({ theme }) => theme.colors.darkGray};
//             height: 110px;
//             font-size: 16px;
//             letter-spacing: -0.333333px;

//             @media screen and (max-width: 375px) {
//                 font-size: 14px;
//                 line-height: 20px;
//                 height: auto;
//                 text-align: center;
//                 padding: 0 10px;
//             }
//         }

//         button {
//             background: transparent;
//             border: none;
//             display: flex;
//             gap: 20px;
//             margin-top: 20px;
//             cursor: pointer;
//             position: absolute;
//             left: 10%;
//             right: 42%;
//             top: 100%;
//             bottom: 0%;
//             width: 100%;

//             @media screen and (max-width: 375px) {
//                 position: relative;
//                 left: 50%;
//                 transform: translateX(-50%);
//                 top: auto;
//                 width: auto;
//                 padding: 10px;

//                 span {
//                     font-size: 12px;
//                     letter-spacing: 10px;
//                 }

//                 img {
//                     width: 30px;
//                 }
//             }

//             span {
//                 font-style: normal;
//                 font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
//                 font-size: 15px;
//                 line-height: 16px;
//                 letter-spacing: 12.5px;
//                 color: ${({ theme }) => theme.colors.veryDarkGray};
//                 transition: 0.3s ease-in;

//                 &:hover {
//                     opacity: 0.6;
//                 }
//             }

//             img {
//                 width: 45px;
//                 transition: 0.3s ease-in;

//                 &:hover {
//                     opacity: 0.5;
//                 }
//             }
//         }
//     }

//     @media screen and (max-width: 375px) {
//         flex-direction: column;
//         height: auto;
//         padding: 20px;

//         .image-container {
//             width: 100%;
//             height: auto;

//             .slidingImage {
//                 position: relative;
//                 width: 100%;
//                 height: auto;
//             }
//         }

//         .text-content {
//             width: 100%;
//             padding: 20px;
//             margin-top: 20px;
//         }
//     }
// `;
