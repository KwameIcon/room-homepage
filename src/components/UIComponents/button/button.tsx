import { ReactNode } from "react";
import { StyledButton } from "./button.styled";

// Define the type for the props of the Button component
type ButtonProps = {
    children: ReactNode; // Children can be of any type accepted by React
    onClick?: () => void; // onClick is an optional function without parameters and returns void
};

// Button component definition
function Button({ children, onClick }: ButtonProps) {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
}

export default Button;
