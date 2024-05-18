import { StyledMenu } from "./menu.styled";
import IconClosed from '../../assets/images/icon-close.svg';

interface MenuProps {
  displayMenu: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ displayMenu, setDisplayMenu }: MenuProps) {

  // Array of menu items
  const menuItems = [
    { name: 'home', link: '/' },
    { name: 'shop', link: '/shop' },
    { name: 'about', link: '/about' },
    { name: 'contact', link: '/contact' }
  ];

  return (
    <StyledMenu isMenuDisplayed={displayMenu}>
      <ul>
        <img src={IconClosed} alt="closed icon" onClick={() => setDisplayMenu(false)} />
        {menuItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </StyledMenu>
  );
}

export default Menu;
