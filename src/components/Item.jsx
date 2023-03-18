import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, ButtonGroup, Button, Stack, Heading, RangeSliderFilledTrack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

/* Este componente recibe por prop los paramentros para poder visualizar las card que me trae itemlist.jsx */

const Item = ({id, name, img, description, price, stock, categoryId}) => {  
      
    return ( 
             <div key={id} className= "tarjetas" >        
                <Card maxW='sm'>
                <CardBody>
                <Heading size='md'>{categoryId}</Heading>
                    <img src={img} alt="" />
                    <Stack mt='6' spacing='3'>
                <Heading size='md'>{name}</Heading>
                </Stack>
                </CardBody>
                <Divider />
                <CardFooter>               
                <ButtonGroup spacing='0'>
                <Link to={`/item/${id}`}>
                <Button variant='solid' colorScheme='orange'>
                    Detalles
                </Button>
                </Link>
                </ButtonGroup>
                </CardFooter>
                </Card>
            </div>        
        )
      }          
  

export default Item