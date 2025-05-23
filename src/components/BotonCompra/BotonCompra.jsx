import React, { useState } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import Swal from 'sweetalert2';
import "./BotonCompra.css";

const estados_disponibles = Object.freeze({
    no_comprado: "no comprado",
    comprado: "comprado",
    cargando: "cargando"
});

const BotonComprar = () => {
    const initial_state = estados_disponibles.no_comprado;
    const [estado_boton, setEstado_boton] = useState(initial_state);


    const comprar = () => {
        setEstado_boton(estados_disponibles.cargando);
        setTimeout( 
            () => {
            setEstado_boton(estados_disponibles.comprado)
            },1500
        )
    }


    let content;

    if (estado_boton === estados_disponibles.no_comprado) {
        content = <button onClick={comprar} className='btn-compra button btn-green'><FaDollarSign  className='icon'/><span className="btn-text">Comprar</span></button>;

    } else if (estado_boton === estados_disponibles.cargando){
        content = <button disabled className='btn-compra button btn-green'>Cargando</button>;

    } else {
        content = <button disabled className='btn-compra button btn-green'>Comprado</button>;
        
        Swal.fire({
            title: "Tu compra fue realizada!",
            icon: "success",
            draggable: true
        });
    }

    

    return (
        <>
            {content }
        </>
    )
}

export default BotonComprar