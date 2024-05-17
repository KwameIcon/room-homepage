import Logo from "../UIComponents/logo/logo";
import Menu from "../menu/menu";
import { StyledHeader } from "./header.styled";

function Header() {
  return (
    <StyledHeader>
      <Logo/>
      <Menu/>
    </StyledHeader>
  )
}

export default Header;