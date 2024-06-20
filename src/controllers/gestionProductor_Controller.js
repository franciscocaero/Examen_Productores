import productor from "../models/gestionProductor.js"
import{v4 as uuidv4} from 'uuid'
import {v2 as cloudinary} from 'cloudinary'
import fsExtra from 'fs-extra'
// para crear producto
const crearProductoController = async (req,res) =>{
    const nuevoProductoData ={
        id:uuidv4(),
        ...req.body   // spread req.body, se trata de recoger todas las propiedades, sin necesidad de ponerlos individualmente
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(req.files.imagen.tempFilePath,{folder:'producto'})
    nuevoProductoData.image = cloudinaryResponse.secure_url
    nuevoProductoData.public_id = cloudinaryResponse.public_id

    const producto = await productor.crearProductoModelo(nuevoProductoData)

    fsExtra.unlink(req.files.imagen.tempFilePath)

    res.status(200).json(producto)

}

// para actualizar producto
const actualizarProductoController = async (req, res) => {
    const {id}= req.params
    try {
        const producto =  await productor.actualizarProductoModelo(id,req.body)
        const status = producto.error ? 404 : 200
        res.status(status).json(producto)

    }catch{
        res.status(500).json({msg:error})
    }
}

// para elimirar producto

const eliminarProductoController = async(req,res) =>{
    const {id}= req.params
    // console.log(id);
    try {

        const productoEnc = await productor.verProductoModelo(id)
        await cloudinary.uploader.destroy(productoEnc.public_id)
        const producto =  await productor.eliminarProductoModelo(id)
        const status = producto.error ? 404 : 200
        res.status(status).json(producto)

    }catch(error){

        res.status(500).json({msg:error})

    }
}

// para ver todos los productos
const verTodosProductosController = async(req,res) =>{
    try {
        const url = 'https://productosapp.free.beeceptor.com/api/productos';
        const response = await fetch(url);
        if (!response.ok) {
          return res.status(404).json({ message: 'No se encontraron productos' });
        }
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

// para ver producto en específico 
const verProductoController =async (req,res) =>{
    const {id}= req.params
    try {
        const producto =  await productor.verProductoModelo(id)
        const status = producto.error ? 404 : 200
        res.status(status).json(producto)

    }catch{
        res.status(500).json({msg:error})

    }
}


// para comprar producto
const comprarProductoController = async (req, res) => {
    const { id } = req.params;
    try {
      const resultado = await productor.comprarProductoModelo(id);
      if (!resultado) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }

  
      res.status(200).json(resultado);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };



export{
    crearProductoController,
    actualizarProductoController,
    eliminarProductoController,
    verTodosProductosController,
    verProductoController,
    comprarProductoController,

 }