import ItemDetail from "./itemDetail"
import Data from "../data.json"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {  
    const {id} = useParams()
    
    const getDatos = () => {
        return new Promise ((resolve, reject) => {
            if (Data.length === 0) {
                reject (new Error ("No hay datos"));
            }
            setTimeout(() => {
                const funkoFilter = Data.filter((item) => item.id == id)
                resolve(funkoFilter);               
            }, 2000);
        }); 
    };
    
    async function fetchingData() {       
        try {
            const datosFetched = await getDatos ();            
            setFunko(datosFetched)
        } catch (err) {
        
        }
    }

    fetchingData();
        
    
    return (
        <div className="tarjetas">
            <ItemDetail funko={Data}/> 
        </div>
        ) 

    }
        
export default ItemDetailContainer