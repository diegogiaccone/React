import { Button, ButtonGroup } from '@chakra-ui/react'
import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

/* En este componente se encuentra, el contador de los items y esta linkeado al componente cart.jsx*/
const CartWidget = () => {
  const {cart} = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <div className="cart">      
      <Button size="1g"
 variant="outline" colorScheme="orange">
    <span className="material-symbols-outlined carrito">🛒 {quantity}</span>
    </Button>     
    </div>
  )
}

export default CartWidget



