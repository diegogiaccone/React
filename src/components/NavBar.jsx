import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

/* Este componete visualiza el NavBar, que no tiene una ruta, porque se visualiza en todos los componentes */

const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" bg="white" color="black">
        <Flex alignItems="center" gap="2">
          <Avatar
            size="xl"
            src="../img/imagen.png"/>          
            <Heading size="md">
              <Link to={"/"}>FunkoPops</Link>
            </Heading>        
          <Spacer />         
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="orange"
                rightIcon={<ChevronDownIcon />}
                m="5">
                Categorias
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"MARVEL"}`}>
                  <MenuItem>Marvel</MenuItem>
                </Link>
                <Link to={`/category/${"DC COMICS"}`}>
                  <MenuItem>DC Comics</MenuItem>
                </Link>
                <Link to={`/category/${"MUSICA"}`}>
                  <MenuItem>Musica</MenuItem>
                </Link>
                <Link to={`/category/${"ANIME"}`}>
                  <MenuItem>Anime</MenuItem>
                </Link>
                <Link to={`/category/${"PELICULAS"}`}>
                  <MenuItem>Peliculas</MenuItem>
                </Link>
              </MenuList>
            </Menu>          
          <Spacer />         
            <Link to={"/cart"}>
              <CartWidget className="cart"/>
            </Link>          
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;