import ItemDetail from "./itemDetail"
import Loading from "./Loading";
import { useState , useEffect } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {  
    const [data, setData] = useState ([]);
    const [loading, setLoading] = useState(true);   
     
    useEffect (() => {
        const db = getFirestore ();
        const ItemsCollection = collection (db, "Funkos");
        getDocs(ItemsCollection).then((snapshot)=>{
            const products = snapshot.docs.map((doc) => ({
              ...doc.data(), id: doc.id,
            }));
            setData(products);
            setLoading(false);
        });
    }, []);
         
    return (
        <div className="tarjetas">
            {loading ? <Loading /> : <ItemDetail products={data}/>} 
        </div>
        ) 

    }
        
export default ItemDetailContainer