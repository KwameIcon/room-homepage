import styled from 'styled-components';

export const StyledShowcaseTop = styled.section`
    max-width: 1440px;
    max-height: 530px;
    display: flex;
    position: relative;

    /* Responsive design for screens with max width of 768px */
    @media screen and (max-width: 768px) {
        max-width: 768px;
        min-height: 1000px;
        flex-flow: wrap;
    }

    /* Responsive design for screens with max width of 375px */
    @media screen and (max-width: 375px) {
        max-width: 375px;
        min-height: 800px;
        flex-flow: wrap;
    }
`;

export const ImageContainer = styled.div`
    width: 61.5%;
    height: 100%;
    flex-shrink: 0;
    overflow: hidden;
    user-select: none;

    @media screen and (max-width: 768px) {
        width: 768px;
        height: 600px;

        @media screen and (max-width: 375px) {
            width: 375px;
            height: 360px;
        }
    }
`;

export const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    transition: transform 2s ease-in-out;
`;

export const ActionsContainer = styled.div`
    position: absolute;
    width: 160px;
    height: 80px;
    left: 61.5%;
    top: 85.6%;
    bottom: 0;
    user-select: none;
    display: flex;
    z-index: 10;

    @media screen and (max-width: 768px) {
        width: 112px;
        height: 56px;
        left: 85.5%;
        top: 545px;

        > :nth-child(1),
        > :nth-child(2) {
            top: 25px;
            width: 56px;
            height: 56px;
            z-index: 0;
        }

        @media screen and (max-width: 414px) {
            left: 75%;
        }

        @media screen and (max-width: 375px) {
            width: 112px;
            height: 56px;
            left: 70%;
            top: 304px;

            > :nth-child(1),
            > :nth-child(2) {
                top: 0;
            }

            @-moz-document url-prefix() {
                left: 225px;
            }

            @media screen and (max-width: 320px) {
                left: 65.5%;
            }
        }
    }
`;

export const TextContent = styled.div`
    position: relative;
    width: 39.5%;
    height: 535px;
    padding: 0px 25px 0px 55px;
    background: transparent;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
        padding-left: 30px;
        padding-top: 0;
        margin-bottom: 10px;
        width: 768px;
        height: 350px;

        @media screen and (max-width: 414px) {
            margin: 0;
            padding: 10px;
        }

        @media screen and (max-width: 375px) {
            max-width: 375px;
            max-height: 278px;
        }
    }
`

export const HeaderText = styled.div`
    font-style: normal;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    font-size: 48px;
    line-height: 44px;
    letter-spacing: -2px;
    color: ${({ theme }) => theme.colors.veryDarkGray};

    @media screen and (max-width: 768px) {
        margin-top: -80px;

        @media screen and (max-width: 375px) {
            font-style: normal;
            font-weight: 600;
            font-size: 40px;
            line-height: 37px;
            letter-spacing: -1.66667px;
            color: ${({ theme }) => theme.colors.black};
        }
    }
`

export const DescriptionText = styled.div`
    font-style: normal;
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.333333px;
    color: ${({ theme }) => theme.colors.darkGray};
`

export const StyledButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: none;
    background-color: #fff;
    user-select: none;

    @media screen and (max-width: 375px) {
        width: 80%;
        text-align: left;
    }
`;

export const ShopNowText = styled.span`
    font-style: normal;
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 12.5px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.veryDarkGray};
    transition: 0.3s ease-in;

    &:hover {
        color: ${({ theme }) => theme.colors.darkGray};
        cursor: pointer;
    }

    @media screen and (max-width: 375px) {
        font-size: 13px;
    }
`;

export const RightArrowIcon = styled.img`
    width: 40px;
    height: 12px;
    transition: 0.3s ease;

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }

    @media screen and (max-width: 375px) {
        width: 10%;
        left: 9%;
        bottom: -8px;
        text-align: left;
    }
`;
