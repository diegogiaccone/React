import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import SendOrder from "./SendOrder";
import NoItemsLoad from "./NoItemsLoad";

/*renderiza los items del carrito y del formulario de sendorder*/ 

const Cart = () => {
  const { cart, setCart, removeAll, calcularTotalCompra } = useContext(CartContext); 
 
  return !cart.length ? (
    <NoItemsLoad />
) : (
    <div className="tarjetas">
      {cart.map((item) => {  
        return (
          <div key={item.id}>
            <Card maxW="sm">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
                <img src={item.img} alt="" />
              </CardHeader>
              <CardBody>
                <Text as="b">Cantidad: {item.quantity}</Text>
                <Text>Precio: $ {item.price}</Text>
                <Text>Total: $ {item.price * item.quantity}</Text>
              </CardBody>
              <CardFooter>
              <div className="bloqButtonClear">
                <button className="btn btn-danger btnClear" onClick={removeAll}>
                    Vaciar carrito
                </button>
                </div>
              </CardFooter>
            </Card>            
          </div>         
        );
      }
      )}    
    <SendOrder/>
    </div>
  );
};

export default Cart;