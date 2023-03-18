import Item from './Item'

/* El componente ItemList lo que hace es listar visualmente cada uno de los productos recibiendo como prop a produc para poder hacer la logica */

const ItemList = ({funko}) => {    
  return (
    <div className='tarjetas'>       
      {funko.map((prod) => {
        return(
           /* Le manda al componente Item las props*/
                <Item
                  key={prod.id}
                      id={prod.id}
                      name={prod.name}
                      img={prod.img}
                      description={prod.description}
                      price={prod.price}
                      stock={prod.stock}
                      categoryId={prod.categoryId}
                      />
                    )
                  }                         
                )
              }
      </div>               
  )
}

export default ItemList