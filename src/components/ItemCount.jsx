import { useContext, useState } from "react";
import {
  Text,
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../contexts/CartContext";

/*este componente maneja el contador y agrega los items al carrito*/

const ItemCount = ({ stock, id, price, name, img }) => { 
  const{cart, setCart} = useContext(CartContext);
  const [count, setCount] = useState(1); 
  const [stockReal, setStockReal] = useState(stock);
 
  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    descontarStock(count)
    setCart((currItems) => {      
      const isItemFound = currItems.find((item) => item.id === id);     
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count, price, img};
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, price, name, img }];
      }            
    });
   
  };

  const descontarStock = (quantity) => {
    setStockReal(stockReal - quantity)       
  }

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count < 1 ? (
          <Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={substractQty} />
        )}
        <Center>          
        {stockReal >= count ? (  <Button
            onClick={() => addToCart()} variant="solid" colorScheme="blue">      
            Agregar al Carrito: {count}
          </Button>  ) : (<Button
            onClick={() => addToCart()} variant="solid" colorScheme="blue" isDisabled>      
            Agregar al Carrito: {count}
          </Button>) }              
        </Center>
        {count < stock ? (
          <IconButton icon={<AddIcon />} onClick={addQty} />
        ) : (
          <Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCount;