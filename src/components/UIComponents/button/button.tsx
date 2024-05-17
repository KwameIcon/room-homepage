import { ReactNode } from "react"
import { StyledButton } from "./button.styled"

type ButtonProp = {
    children: ReactNode,
    onClick?: () => void
}

function Button({children, onClick}: ButtonProp) {
  return (
    <StyledButton onClick={onClick}>
        {children}
    </StyledButton>
  )
}

export default Button