import React from 'react'
import "./Productos.css"
import BotonComprar from '../BotonCompra/BotonCompra'
import { NavLink } from 'react-router'

export const Productos = ({id, titulo, img,  precio, descuento}) => {

    const precioConDescuentoSinRedondear = precio - (descuento * precio) / 100;
    const precioConDescuentoRedondeado = Math.round((precioConDescuentoSinRedondear * 100) / 100);
    

    return (
    <>
        <main className='main-product-card'>
            <div className="card-container">
                <div className="card">
                    <div className="imgBox">
                        <span className='discount'>-{descuento}%</span>
                        <img
                        src={img}
                        alt={id}
                        className="mouse"
                        />
                    </div>
                    <div className="contentBox">
                        <h3>{titulo}</h3>
                        <h2 className="price">
                        <span className='preciof'>${precioConDescuentoRedondeado}</span>
                        <span className='precioa'>${precio}</span>
                        </h2>
                        <div className="botones-card">
                            <BotonComprar type="button">COMPRAR</BotonComprar>
                            <button className="button"><NavLink to={`/products/${id}`}>Ver detalle</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>

    )
}

export default Productos