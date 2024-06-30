import Menu from "../menu/menu";
import IconClosed from "../../assets/images/icon-close.svg";
import { StyledHeader, Overlay, HamburgerIconWrapper, CloseIcon, Logo, MenuWrapper } from "./header.styled";

import LogoIcon from '../../assets/images/logo.svg';
import HamburgerIcon from '../../assets/images/icon-hamburger.svg';
import { useState } from "react";

function Header() {
  // State to control the visibility of the menu
  const [displayMenu, setDisplayMenu] = useState(true);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setDisplayMenu(prev => !prev);
  };

  return (
    <StyledHeader>
      {/* Overlay that covers the screen when the menu is open */}
      <Overlay displayMenu={displayMenu} onClick={toggleMenu} />
      
      {/* Hamburger icon to open the menu */}
      {displayMenu ? <HamburgerIconWrapper src={HamburgerIcon} alt="menu" onClick={toggleMenu} /> : <CloseIcon src={IconClosed} alt="closed icon" onClick={toggleMenu} />}
      
      {/* Logo */}
      <Logo src={LogoIcon} alt="Logo" />
      
      {/* Menu component with props to control its visibility */}
      <MenuWrapper displayMenu={displayMenu}>
        <Menu displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
      </MenuWrapper>
    </StyledHeader>
  );
}

export default Header;
