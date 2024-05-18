import Menu from "../menu/menu";
import { StyledHeader } from "./header.styled";

import LogoIcon from '../../assets/images/logo.svg';
import HamburgerIcon from '../../assets/images/icon-hamburger.svg';
import { useState } from "react";

function Header() {
  // State to control the visibility of the menu
  const [displayMenu, setDisplayMenu] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setDisplayMenu(prevState => !prevState);
  };

  return (
    // Pass the displayMenu state as a prop to StyledHeader
    <StyledHeader displayMenu={displayMenu}>
      {/* Overlay that covers the screen when the menu is open */}
      <div className="overlay" onClick={toggleMenu}/>
      
      {/* Hamburger icon to open the menu */}
      <img src={HamburgerIcon} alt="menu" onClick={toggleMenu} />
      
      {/* Logo */}
      <img src={LogoIcon} alt="Logo" />
      
      {/* Menu component with props to control its visibility */}
      <Menu displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
    </StyledHeader>
  );
}

export default Header;
