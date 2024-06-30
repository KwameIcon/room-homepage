import { StyledMenu, MenuList, MenuItem } from "./menu.styled";
import { FC, ReactElement } from 'react';

interface MenuProps {
  displayMenu: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: FC<MenuProps> = ({ displayMenu }: MenuProps): ReactElement => {
  const menuItems = [
    { name: 'home', link: '/' },
    { name: 'shop', link: '/shop' },
    { name: 'about', link: '/about' },
    { name: 'contact', link: '/contact' }
  ];

  return (
    <StyledMenu displayMenu={displayMenu}>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>{item.name}</MenuItem>
        ))}
      </MenuList>
    </StyledMenu>
  );
};

export default Menu;
