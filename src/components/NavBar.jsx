import CartWidget from './CartWidget';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,   
  } from '@chakra-ui/react'

const NavBar = ({greeting}) => {
  return (
    <div className="nav">
      <div className="brand">
      <img className="logo" src="./Img/imagen.png" alt="Logo"></img>     
      <h1>{greeting}</h1>      
      </div>
<Menu>
  <MenuButton>
    <h2>CATEGORIAS</h2>
  </MenuButton>
  <MenuList>
    <MenuItem>Marvel</MenuItem>
    <MenuItem>DC Comics</MenuItem>
    <MenuItem>Anime</MenuItem>
    <MenuItem>Musica</MenuItem>
    <MenuItem>Peliculas</MenuItem>
  </MenuList>
</Menu>
<CartWidget />
    </div>
  )
} 

export default NavBar;

