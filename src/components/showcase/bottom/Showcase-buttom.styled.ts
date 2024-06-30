import styled from "styled-components";

// Styled components for ShowcaseBottom
export const StyledShowcaseBottom = styled.section`
    width: 1440px;
    height: 266px;
    display: flex;
    gap: 0;

    @media screen and (max-width: 768px) {
        max-width: 768px;
        flex-direction: column;
        height: fit-content;

        @media screen and (max-width: 375px) {
            max-width: 375px;
        }
    }
`;

export const AboutDarknessContainer = styled.div`
    width: 420px;
    height: 266px;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        width: 768px;
        height: 100%;
        background: #D8D8D8;
        

        @media screen and (max-width: 375px) {
            width: 376px;
            height: 238px;
        }
    }
`;

export const AboutDarknessImage = styled.img`
    width: 100%;
    height: 100%;
`

export const FurnitureInfoContainer = styled.div`
    width: 580px;
    height: 266px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};

    @media screen and (max-width: 768px) {
        width: 100vw;

        @media screen and (max-width: 375px) {
            margin-bottom: 50px;
            height: 213px;
            margin-top: 0;
            padding: 20px;
        }
    }
`;

export const FurnitureInfoContent = styled.div`
    width: 484px;
    height: 139px;
    display: flex;
    gap: 20px;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        margin: 0;
        padding: 10px;
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
    }
`;

export const FurnitureInfoContainerHeader = styled.h6`
    font-style: normal;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    font-size: 16px;
    line-height: 22px;
    text-align: justify;
    letter-spacing: 5px;
    color: ${({ theme }) => theme.colors.black};

    @media screen and (max-width: 375px) {
        font-size: 14px;
        letter-spacing: 5.83333px;
    }
`

export const FurnitureInfoMessage = styled.p`
    width: 100%;
    height: 110px;
    font-style: normal;
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.333333px;
    color: ${({ theme }) => theme.colors.darkGray};
`

export const AboutLightContainer = styled.div`
    width: 440px;
    height: 266px;

    @media screen and (max-width: 768px) {
        width: 768px;

        @media screen and (max-width: 375px) {
            width: 375px;
            height: 227px;
            margin-top: 39px;
        }
    }
`;

export const AboutLightImage = styled.img`
    width: 100%;
`