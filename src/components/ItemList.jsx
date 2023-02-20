import Item from './Item'

const ItemList = ({funko}) => {   
  return (
    <div className='tarjetas'>       
      {funko.map((item) => {
        return(
                <Item
                  key={item.id}
                      id={item.id}
                      name={item.name}
                      img={item.img}
                      description={item.description}
                      price={item.price}
                      stock={item.stock}
                      categoryId={item.categoryId}
                      />
                    )
                  }                         
                )
              }
      </div>               
  )
}

export default ItemList