import Menu from "../menu/menu";
import { StyledHeader } from "./header.styled";

import LogoIcon from '../../assets/images/logo.svg';
import HamburgerIcon from '../../assets/images/icon-hamburger.svg';
import { useState } from "react";

function Header() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = () => {
    setDisplayMenu(prevState => !prevState);
  };

  return (
    <StyledHeader displayMenu={displayMenu}>
      <div className="overlay" onClick={toggleMenu}/>
      <img src={HamburgerIcon} alt="menu" onClick={toggleMenu} />
      <img src={LogoIcon} alt="Logo" />
      <Menu displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
    </StyledHeader>
  );
}

export default Header;
