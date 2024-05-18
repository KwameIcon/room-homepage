import Menu from "../menu/menu";
import { StyledHeader } from "./header.styled";

import LogoIcon from '../../assets/images/logo.svg'
import HamburgerIcon from '../../assets/images/icon-hamburger.svg';
import { useState } from "react";

function Header() {

  const [displayMenu, setDisplayMenu] = useState<false | true>(false)

  return (
    <StyledHeader displayMenu = {displayMenu}>
      <img src= {HamburgerIcon} alt="menu" onClick={() => setDisplayMenu(true)} />
      <img src= {LogoIcon} alt="Logo"/>
      <Menu/>
    </StyledHeader>
  )
}

export default Header;