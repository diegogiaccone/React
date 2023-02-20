import { Card, CardHeader, CardBody, CardFooter, Divider, ButtonGroup, Button, Stack, Heading, RangeSliderFilledTrack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';

const ItemDetail = ({funko}) => {   
    const {id} = useParams();    
    const funkoFilter = funko.filter((item) => item.id == id);     
  return (
    <div>{
        funkoFilter.map((item) => (
          <div key={item.id} >
                <Card maxW='sm'>
                <CardBody>
                <Heading size='md'>{item.categoryId}</Heading>
                    <img src={item.img} alt="" />
                    <Stack mt='6' spacing='3'>
                <Heading size='md'>{item.name}</Heading>
                <p>
                {item.description}
                </p>
                <p color='blue.600' fontSize='2xl'>
                   $ {item.price}
                </p>
                <p color='blue.600' fontSize='2xl'>
                    {item.stock} En Stock
                </p>
                </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                <ButtonGroup spacing='2'>
                <ItemCount stock={item.stock}/>
                <Button variant="solid" colorScheme="orange">
                    Agregar al Carrito
                  </Button>
                </ButtonGroup>
                </CardFooter>
                </Card>
          </div>  
        ))
    }</div>
  )
}

export default ItemDetail

