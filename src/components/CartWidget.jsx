import { Button, ButtonGroup } from '@chakra-ui/react'
import React from "react";
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <div className="cart">      
      <Button size="1g"
 variant="outline" colorScheme="orange">
    <span className="material-symbols-outlined carrito">🛒 8</span>
    </Button>     
    </div>
  )
}

export default CartWidget