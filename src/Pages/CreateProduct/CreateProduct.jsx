import React, { useState } from 'react'
import "./CreateProduct.css"
import { addDoc, collection } from 'firebase/firestore'
import database from '../../config/firebase'

function CreateProduct() {

    let initial_state_form = {
        titulo: "",
        precio: 0,
        descuento: 0,
        img: null
    }
    const [formulario, setFormulario] = useState(initial_state_form)
    const [loading, setLoading] = useState(false)

    const handleChange = (e)=> {
        let field = e.target.name
        let new_value = e.target.value
        if(field === "img"){
            setFormulario(
                (prev) => {
                    return {
                        ...prev,
                        "img": e.target.files[0]
                    }
                }
            )
        }
        else {
            setFormulario(
                (prev)=> {
                    return {
                        ...prev,
                        [field]: new_value
                    }
                }
            )
        }
    }

    const uploadImgToImgBB = async (img_file)=> {
        let API_KEY_IMGBB = "670375907b21df7135428c7b515ae308";
        const form_data = new FormData()
        form_data.append("image", img_file)

        const response = await fetch(
            `https://api.imgbb.com/1/upload?key=${API_KEY_IMGBB}`,
            {
                method: "POST",
                body: form_data
            }
        )
        const data = await response.json()
        console.log("respuesta de IMGBB", data)
        return data.data.url
    }

    const handleSubmit = async (event)=> {
        event.preventDefault()
        setLoading(true)

        const url_img = await uploadImgToImgBB(formulario.img)
        console.log(url_img)
        const collection_ref = collection(database, "products")
        await addDoc(
            collection_ref,
            {
                titulo: formulario.titulo,
                precio: formulario.precio,
                descuento: formulario.descuento,
                descripcion: formulario.descripcion,
                stock: formulario.stock,
                categoria: formulario.categoria,
                img: url_img
            }
        )
        setFormulario(initial_state_form)
        setLoading(false)
    }

    return (
        <>
            <div>
                <h1>Crear Producto</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="titulo">Titulo:</label>
                        <input  type="text" 
                                name='titulo' 
                                id='titulo' 
                                placeholder='Escribe el Titulo' 
                                value={formulario.titulo}
                                onChange={handleChange}
                                required/>
                    </div>
                    <div>
                        <label htmlFor="categoria">Categoria del producto:</label>
                        <input  type="text" 
                                name='categoria' 
                                id='categoria' 
                                placeholder='Escribe la categoria del producto' 
                                value={formulario.categoria}
                                onChange={handleChange}
                                required/>
                    </div>
                    <div>
                        <label htmlFor="precio">Precio:</label>
                        <input  type="number" 
                                name='precio' 
                                id='precio' 
                                step="any"
                                placeholder='Escribe el Precio' 
                                min={0} 
                                value={formulario.precio}
                                onChange={handleChange}
                                required/>
                    </div>
                    <div>
                        <label htmlFor="descuento">Descuento:</label>
                        <input  type="number" 
                                name='descuento' 
                                id='descuento' 
                                placeholder='Escribe el Descuento'
                                max={99} 
                                min={0} 
                                value={formulario.descuento}
                                onChange={handleChange}
                                required/>
                    </div>
                    <div>
                        <label htmlFor="stock">Stock:</label>
                        <input  type="number" 
                                name='stock' 
                                id='stock' 
                                pattern="[0-9]*"
                                placeholder='Escribe la Cantidad en Stock' 
                                min={0} 
                                value={formulario.stock}
                                onChange={handleChange}
                                required/>
                    </div>
                    <div>
                        <label htmlFor="descripcion">Descripcion del producto:</label>
                        <input  type="text" 
                                name='descripcion' 
                                id='descripcion' 
                                placeholder='Escribe la descripcion del producto' 
                                value={formulario.descripcion}
                                onChange={handleChange}
                                required/>
                    </div>
                    <div>
                        <label htmlFor="img">Imagen:</label>
                        <input  type="file" 
                                name='img' 
                                id='img'  
                                onChange={handleChange}
                                required/>
                    </div>
                    <button type='submit' className='submit' disabled={loading}>{loading ? "Creando producto..." : 'Crear producto'}</button>
                </form>
            </div>
        </>
    )
}

export default CreateProduct