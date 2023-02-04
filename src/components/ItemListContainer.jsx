import { Card, CardHeader, CardBody, CardFooter, Divider, ButtonGroup, Button, Stack, Heading, RangeSliderFilledTrack } from '@chakra-ui/react'

const ItemListConteiner = () => {
  return (
    <div className="tarjetas">
      <div>        
      <Card maxW='sm'>
  <CardBody>
   <img src="./img/imagen1.png" alt="" />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Iron Man</Heading>
      <p>
      Edición limitada no te lo podes perder. Esta increible oferta
      expira el 30 de agosto del 2023.
      </p>
      <p color='blue.600' fontSize='2xl'>
        $3500
      </p>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        COMPRAR
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Agregar al carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
      </div>
      <div >        
      <Card maxW='sm'>
  <CardBody>
   <img src="./img/imagen2.png" alt="" />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Deadpool</Heading>
      <p>
      Edición limitada no te lo podes perder. Esta increible oferta
      expira el 30 de agosto del 2023.
      </p>
      <p color='blue.600' fontSize='2xl'>
        $3200
      </p>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        COMPRAR
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Agregar al carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
      </div>
      <div >        
      <Card maxW='sm'>
  <CardBody>
   <img src="./img/imagen3.png" alt="" />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Kurt Cobain</Heading>
      <p>
      Edición limitada no te lo podes perder. Esta increible oferta
      expira el 30 de agosto del 2023.
      </p>
      <p color='blue.600' fontSize='2xl'>
        $3500
      </p>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        COMPRAR
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Agregar al carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
      </div>
      <div>        
      <Card maxW='sm'>
  <CardBody>
   <img src="./img/imagen4.png" alt="" />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Joven Manos de Tijera</Heading>
      <p>
      Edición limitada no te lo podes perder. Esta increible oferta
      expira el 30 de agosto del 2023.
      </p>
      <p color='blue.600' fontSize='2xl'>
        $3300
      </p>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        COMPRAR
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Agregar al carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
      </div>
      <div>        
      <Card maxW='sm'>
  <CardBody>
   <img src="./img/imagen7.png" alt="" />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Naruto</Heading>
      <p>
      Edición limitada no te lo podes perder. Esta increible oferta
      expira el 30 de agosto del 2023.
      </p>
      <p color='blue.600' fontSize='2xl'>
        $3200
      </p>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        COMPRAR
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Agregar al carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
      </div>
      <div>        
      <Card maxW='sm'>
  <CardBody>
   <img src="./img/imagen6.png" alt="" />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Joker</Heading>
      <p>
      Edición limitada no te lo podes perder. Esta increible oferta
      expira el 30 de agosto del 2023.
      </p>
      <p color='blue.600' fontSize='2xl'>
        $4000
      </p>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        COMPRAR
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Agregar al carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
      </div>
    </div>

  
  )
}

export default ItemListConteiner

