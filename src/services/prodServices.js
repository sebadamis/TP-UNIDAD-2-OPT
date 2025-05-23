import { collection, getDocs } from "firebase/firestore"
import database from "../config/firebase"


export const getProducts = async () =>{
    try{
        const products_collection_reference = collection(database, "products");
        const result = await getDocs(products_collection_reference);
        const product_list_formatted = result.docs.map(
            (document) => {
                return {
                    id: document.id,
                    ...document.data()
                }
            }
        )
        return product_list_formatted;
    }
    catch(error){
        console.error('Error al obtener productos:', error)
        return null
    }
}



export const getProdById = async ({prod_id}) => {
    const products = await getProducts();
    return products.find(product => product.id == prod_id)
}