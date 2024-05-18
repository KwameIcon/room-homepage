import styled from 'styled-components';

// Styled component for the ShowcaseTop section
export const StyledShowcaseTop = styled.section`
    max-width: 1440px;
    max-height: 530px;
    display: flex;
    position: relative;

    // Responsive design for screens with max width of 375px
    @media screen and (max-width: 375px) {
        max-width: 375px;
        min-height: 800px;
        flex-flow: wrap;

    }

    // Styles for the image container
    .image-container {
        width: 840px;
        height: 100%;
        flex-shrink: 0;
        overflow: hidden;
        user-select: none;

        // Responsive design for screens with max width of 375px
        @media screen and (max-width: 375px) {
            width: 375px;
            height: 360px;
        }

        // Nested style for the image with transition effect
        .image-container img {
            width: 100%;
            height: 100%;
            transition: transform 2s ease-in-out; // Smooth transition for image change
        }
    }

    // Styles for the action buttons (left and right arrows)
    .actions {
        position: absolute;
        width: 160px;
        height: 80px;
        left: 840px;
        top: 454px;
        user-select: none;

        // Style for the left arrow button
        & > :nth-child(1) {
            position: absolute;
            left: 0;
            z-index: 10;

            &:hover {
                color: ${({ theme }) => theme.colors.darkGray};
                cursor: pointer;
            }
        }

        // Style for the right arrow button
        & > :nth-child(2) {
            position: absolute;
            right: 0;
            z-index: 10;

            &:hover {
                color: ${({ theme }) => theme.colors.darkGray};
                cursor: pointer;
            }
        }

        // Responsive design for screens with max width of 375px
        @media screen and (max-width: 375px) {
            /* Normal styling for other browsers */
            width: 112px;
            height: 56px;
            left: 263px;
            top: 304px;

            /* Adjust size and position for the left arrow button */
            & > :nth-child(1) {
                width: 56px;
                height: 56px;
                z-index: 0;
            }

            /* Adjust size and position for the right arrow button */
            & > :nth-child(2) {
                width: 56px;
                height: 56px;
                z-index: 0;
            }

            /* Firefox-specific styling */
            @-moz-document url-prefix() {
                left: 225px; /* Adjust the left position for Firefox */
            }
        }

    }

    // Styles for the text content
    .text-content {
        position: relative;
        width: 600px;
        height: 531px;
        padding: 0px 25px 0px 55px;
        background-color: ${({ theme }) => theme.colors.white};
        display: flex;
        gap: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        // Responsive design for screens with max width of 375px
        @media screen and (max-width: 375px) {
            padding-left: 30px;
            margin-top: -80px;
            max-width: 375px;
            max-height: 278px;
        }

        // Styles for the header text
        h3 {
            font-style: normal;
            font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
            font-size: 48px;
            line-height: 44px;
            letter-spacing: -2px;
            color: ${({ theme }) => theme.colors.veryDarkGray};

            // Responsive design for screens with max width of 375px
            @media screen and (max-width: 375px) {
                font-style: normal;
                font-weight: 600;
                font-size: 40px;
                line-height: 37px;
                letter-spacing: -1.66667px;
                color: ${({ theme }) => theme.colors.black};
            }
        }

        // Styles for the description text
        p {
            font-style: normal;
            font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
            font-size: 16px;
            line-height: 22px;
            letter-spacing: -0.333333px;
            color: ${({ theme }) => theme.colors.darkGray};
        }

        // Styles for the button
        button {
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
            user-select: none;

            // Styles for the button text
            span {
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

                // Responsive design for screens with max width of 375px
                @media screen and (max-width: 375px) {
                    font-size: 13px;
                }

                        /* Firefox-specific styling */

            }

            // Styles for the button image
            img {
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

            }

            // Responsive design for screens with max width of 375px
            @media screen and (max-width: 375px) {
                width: 80%;
                left: 9%;
                bottom: -8px;
                text-align: left;
            }

            @-moz-document url-prefix() {
                @media screen and (max-width: 375px) {
                    bottom: -30px;
                    left: 10%;
                }
            }
        }
    }
`;
