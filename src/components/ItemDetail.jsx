import { Card, CardHeader, CardBody, CardFooter, Divider, ButtonGroup, Button, Stack, Heading, RangeSliderFilledTrack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';
import {getDoc, doc, getFirestore} from "firebase/firestore"
import { useState, useEffect } from "react"

/* Este componente su funcion es pasar la visualizacion del producto con mas detalles, que recibe por paramentro el prop de detalleProducto */

const ItemDetail = ({funko}) => {   
  const {id} = useParams(); 

  
  const [product, setProduct] = useState([]);

  useEffect (() => {
      const db = getFirestore();
      const oneItem = doc(db, "Funkos", `${id}` )
        getDoc(oneItem).then((snapshot)=>{
            if (snapshot.exists()){
                setProduct(snapshot.data());
            } else {
              console.log("no hay documento");
            }
        });
    }, []);
   
   return (
          <div key={product.id} >
                <Card maxW='sm'>
                <CardBody>
                <Heading size='md'>{product.categoryId}</Heading>
                    <img src={product.img} alt="" />
                    <Stack mt='6' spacing='3'>
                <Heading size='md'>{product.name}</Heading>
                <p>
                {product.description}
                </p>
                <p color='blue.600' fontSize='2xl'>
                   $ {product.price}
                </p>
                <p color='blue.600' fontSize='2xl'>
                    {product.stock} En Stock
                </p>
                </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                <ButtonGroup spacing='2'>
                {/* A travez del componente ItemCount le pasamos por prop los parametros para poder visualizar lo agregado al carrito */}
                <ItemCount stock={product.stock} price={product.price} id={product.id} name={product.name} img={product.img}/>
                </ButtonGroup>
                </CardFooter>
                </Card>
          </div>  
        )
    }
  


export default ItemDetail

