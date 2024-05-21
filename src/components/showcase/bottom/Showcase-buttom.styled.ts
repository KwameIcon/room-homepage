import styled from "styled-components";

// Styled component for the ShowcaseBottom section
export const StyledShowcaseBottom = styled.section`
    width: 1440px;
    height: 266px;
    display: flex;
    gap: 0;

    @media screen and (max-width:768px) {
        max-width: 768pxpx;
        flex-direction: column;
        gap: 20px;
        min-height: 768px;
    
        @media screen and (max-width: 375px) {
            max-width: 375px;
        }
    }

    /* Styles for the "about-darkness" section */
    .about-darkness {
        width: 420px;
        height: 266px;

        @media screen and (max-width:768px) {
            width: 768px;

            img{
                width: 100%;
            }
        
            @media screen and (max-width: 375px) {
                background: #D8D8D8;
            }
        }
    }

    /* Styles for the "furniture-info" section */
    .furniture-info {
        width: 580px;
        height: 266px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({theme}) => theme.colors.white};

        & > div {
            width: 484px;
            height: 139px;
            display: flex;
            gap: 20px;
            flex-direction: column;

            h6 {
                font-style: normal;
                font-weight: ${({theme}) => theme.typography.fontWeight.bold};
                font-size: 16px;
                line-height: 22px;
                text-align: justify;
                letter-spacing: 5px;
                color: ${({theme}) => theme.colors.black};

                @media screen and (max-width: 375px) {
                    font-size: 14px;
                    letter-spacing: 5.83333px;
                }
            }

            p {
                height: 110px;
                font-style: normal;
                font-weight: ${({theme}) => theme.typography.fontWeight.regular};
                font-size: 16px;
                line-height: 22px;
                letter-spacing: -0.333333px;
                color: ${({theme}) => theme.colors.darkGray};
            }
        }

        @media screen and (max-width:768px) {
            width: 768px;
            margin: 20px 0px;
            margin-top: 250px;
        
            @media screen and (max-width: 375px) {
                width: 375px;
                height: 300px;
                padding: 50px 20px;
                margin-bottom: 50px;
            }
        }
    }

    /* Styles for the "about-light" section */
    .about-light {
        width: 440px;
        height: 266px;

        @media screen and (max-width: 768px) {
            width: 768px;

            img{
                width: 100%;
            }
        
            @media screen and (max-width:375px) {
                width: 375px;
                height: 227px;
            }
        }
    }
`;
