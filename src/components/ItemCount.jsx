import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Center, IconButton, Tooltip } from "@chakra-ui/react";
import { useContext, useState } from "react"
import { useParams } from "react-router-dom";

const ItemCount = ({stock, id, price, name}) => {   
    const [count, setCount] = useState(1);
    const addQty = () => {
        setCount (count +1);
    };
    const substractQty = () => {
        setCount (count - 1);
    };

    const addToCart = () => {
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item.id === id);
            if (isItemFound) {
                return currItems.map((item) => {
                    if (item,id === id) {
                        return {...item, quantity: item.quantity + count};
                    } else{
                        return item;
                    }
                })
            } else {
                return [...currItems, {id, quantity: count, price, name}]
            }
        })
    }

  return (
    <div>
        <ButtonGroup size="sm" isAttached variant="outline">
            {count < 1 ? (
                <Tooltip label="minimum stock reached" placement="buttom">
                    <IconButton icon ={<MinusIcon/>} isDisabled/>
                </Tooltip>
            ) : (
                <IconButton icon={<MinusIcon/>} onClick={substractQty}/>
            )}
            <Center>
                <Button onClick={() => addToCart ()} variant ="solid" colorScheme="orange">
                    Cantidad: {count}
                </Button>
            </Center>
            {count < stock ? (
                <IconButton icon={<AddIcon/>} onClick={addQty}/>
            ) : (
                <Tooltip label="stock limit reached" placement="buttom">
                    <IconButton icon={<AddIcon/>} isDisabled/>
                </Tooltip>
            )}
        </ButtonGroup>
    </div>
  )
}

export default ItemCount