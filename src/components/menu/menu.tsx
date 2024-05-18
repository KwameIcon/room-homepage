import { StyledMenu } from "./menu.styled";
import IconClosed from '../../assets/images/icon-close.svg';

// Interface to define the prop types for the Menu component
interface MenuProps {
  displayMenu: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

// Menu component definition
function Menu({ displayMenu, setDisplayMenu }: MenuProps) {

  // Array of menu items
  const menuItems = [
    { name: 'home', link: '/' },
    { name: 'shop', link: '/shop' },
    { name: 'about', link: '/about' },
    { name: 'contact', link: '/contact' }
  ];

  return (
    // Styled component for the menu
    <StyledMenu isMenuDisplayed={displayMenu}>
      <ul>
        {/* Close icon */}
        <img src={IconClosed} alt="closed icon" onClick={() => setDisplayMenu(false)} />
        {/* Mapping through menu items to create list elements */}
        {menuItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </StyledMenu>
  );
}

export default Menu;
