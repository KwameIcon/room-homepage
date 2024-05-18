import styled from "styled-components";

export const StyledButton = styled.div`
    /* Main class for the button styling */
    width: 80px; /* Set width to 80px */
    height: 80px; /* Set height to 80px */
    background-color: #000; /* Set background color to black */
    display: flex; /* Use flexbox for layout */
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    transition: background 0.3s ease-in; /* Smooth transition for background color */

    &:hover {
        /* Hover effect */
        background-color: rgb(50, 50, 50); /* Darken background color on hover */
        cursor: pointer; /* Change cursor to pointer on hover */
    }

    img {
        /* Styling for images within the button */
        width: 20px; /* Set width of image to 20px */
        height: 30px; /* Set height of image to 30px */
    }
`;
