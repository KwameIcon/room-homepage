import { StyledMenu } from "./menu.styled"

function Menu() {

  // Array of menu items
  const menuItems = [
    {name: 'home', link: '/'},
    {name: 'shop', link: '/shop' },
    {name: 'about', link: '/about'},
    {name: 'contact', link: '/contact'}
  ]

  return (
    <StyledMenu>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </StyledMenu>
  )
}

export default Menu