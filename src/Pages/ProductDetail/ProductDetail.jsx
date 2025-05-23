import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getProdById } from '../../services/prodservices';
// import ProdDetailCard2 from '../../components/ProdDetailCard2/ProdDetailCard2';
import ProdDetailCard from '../../components/ProdDetailCard/ProdDetailCard';


function ProductDetail() {
    const {prod_id} = useParams();
    console.log(prod_id);

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    

    const getProductDetail = async () => {
            setLoading(true)
            
            setTimeout(
                async () => {
                    const products_detail_response = await getProdById({prod_id})
                    if (products_detail_response) {
                        setProduct(products_detail_response)
                    }
                    else {
                        setError('Error al buscar el producto')
                    }
                    setLoading(false)
                },
                1500
            )
    
    }

    useEffect(
        () => {
            getProductDetail()
        }, []
    )

    let content
    if (loading) {
        content = <h1>Cargando...</h1>
    }
    else {
        if (error) {
            content = <h1>{error}</h1>
        }
        else {
            content = <ProdDetailCard {...product}/>
        }
    }

    return (      
        <>
        
            {content}

        </>
    )
}

export default ProductDetail