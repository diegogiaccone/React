import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore"

/* Pasa toda la logica para el resto de los componentes, tambien tiene la collection de FireBase donde se encuentra todo los productos */

const ItemListContainer = () => {
  const [products, setProducts] = useState ([])
  const {categoryId} = useParams();  

  useEffect (() => {
      const db = getFirestore ();
      const ItemsCollection = collection (db, "Funkos");
      getDocs(ItemsCollection).then((snapshot)=>{
          const products = snapshot.docs.map((doc) => ({
            ...doc.data(), id: doc.id,
          }));
          setProducts(products);
        });
        
        
      },[]);
      
     
  const catFilter = (products.filter((funko) => funko.categoryId === categoryId))     
      
  return (
  <div>      
    {categoryId ? <ItemList funko={catFilter} />  : <ItemList funko={products} />}
  </div>
  
    )
  }
 

export default ItemListContainer

