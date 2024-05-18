import { StyledMenu } from "./menu.styled";
import { useEffect, useRef, useState } from "react";
import IconClosed from '../../assets/images/icon-close.svg';

function Menu() {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const UlRef = useRef<HTMLUListElement>(null);
  const ClosedButtonRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Array of menu items
  const menuItems = [
    {name: 'home', link: '/'},
    {name: 'shop', link: '/shop' },
    {name: 'about', link: '/about'},
    {name: 'contact', link: '/contact'}
  ];

  useEffect(() => {
    const handleClick = (ev: MouseEvent) => {
      if (ev.target === containerRef.current && ev.target !== UlRef.current)
        setDisplayMenu(!displayMenu);
    };

    window.addEventListener('click', handleClick);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <StyledMenu style={{display: displayMenu ? 'block' : 'none'}} ref={containerRef}>
      <ul ref={UlRef} >
        <img src={IconClosed} alt="closed icon" ref={ClosedButtonRef}/>
        {menuItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </StyledMenu>
  );
}


export default Menu;
