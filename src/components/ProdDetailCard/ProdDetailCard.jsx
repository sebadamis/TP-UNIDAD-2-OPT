import React from 'react'
import "./ProdDetailCard.css";
import BotonesDetail from '../BotonesDetail/BotonesDetail';


    const ProdDetailCard = ({id, titulo, descripcion, img, descuento, stock, categoria, precio}) => {
    
    const precioConDescuentoSinRedondear = precio - (descuento * precio) / 100;
    const precioConDescuentoRedondeado = Math.round((precioConDescuentoSinRedondear * 100) / 100);
    
    

    return (
        <>
            <main className='main-container-detailcard'>
                <article className='art-detailcard-container'>
                    <section className="section product" aria-label="product">
                        <div className="container">
                            <div className="img-container">
                                <img
                                    src={img}
                                    alt={id}/>
                            </div>
                            <div className="product-content">
                                <p className="product-subtitle">{categoria}</p>
                                <h1 className="h1 product-title">
                                    {titulo}
                                </h1>
                                <p className="product-text">
                                    <span className='stock'>Stock: {stock}</span>
                                    
                                    <span className='description'>Descripción: </span>
                                    {descripcion}
                                </p>
                                <div className="wrapper">
                                    <span className="price" data-total-price="">${precioConDescuentoRedondeado}</span>
                                    <span className="badge">{descuento}%</span>
                                    <del className="del">${precio}</del>
                                </div>
                            
                                <BotonesDetail/>
                            
                            </div>
                        </div>
                    </section>
                </article>
            </main>
    </>
);
}


export default ProdDetailCard