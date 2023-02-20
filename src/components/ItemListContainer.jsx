import ItemList from './ItemList'
import Data from "../data.json"
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const {categoryId} = useParams();  
    
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {       
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Data);
    }, 2000);      
    })
  }

async function fetchingData() {    
  try{
    const datosFetched = await getDatos()      
  }catch(err) {
  }
}

fetchingData();

if (categoryId === undefined){
  return(
    <div>
      <ItemList funko={Data} />     
    </div>
  )
}else{
  const catFilter = Data.filter((funko) => funko.categoryId === categoryId);
    

  return (
  <div>    
    {
      catFilter ? (
        <ItemList funko={catFilter}/>
      ) : 
        <ItemList funko={Data}/>        
    }
  </div>
    )
  }
}  

export default ItemListContainer

