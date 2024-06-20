
const productor ={

    // para crear producto
    async crearProductoModelo(nuevoProducto){
        const url = 'https://appproduct.free.beeceptor.com/api/productos'
        const peticion = await fetch(url,{
            method: 'POST', // verbo que quiero ejecutar 
            body: JSON.stringify(nuevoProducto), // informacion
            headers: {'Content-Type':'application/json'} // tipo de contenido
        })
        const data = await peticion.json()

        return data
    }
    ,
    // para actualizar producto 
    async actualizarProductoModelo(productoID,dataProducto){
        const url = `https://appproduct.free.beeceptor.com/api/productos/${productoID}`
        const peticion = await fetch(url,{
            method: 'PUT', // verbo que quiero ejecutar 
            body: JSON.stringify(dataProducto), // informacion
            headers: {'Content-Type':'application/json'} // tipo de contenido
        })
        const data = await peticion.json()

        return data
    }
    ,
    // para eliminar producto
    async eliminarProductoModelo(productoID){
        // código
        const url = `https://appproduct.free.beeceptor.com/api/productos/${productoID}`;
        const peticion = await fetch(url, {
            method: 'DELETE', // verbo para eliminar
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await peticion.json();
        return {msg:"producto eliminado correctamente"}
    }
    ,
    async verProductoModelo(productoID){
        console.log(productoID)
        const response = await fetch(`https://appproduct.free.beeceptor.com/api/productos/${productoID}`)
        if (!response.ok){
            return {error:"Producto no encontrado"}
        }   

        

        const data = await response.json()

        return data
    }
    ,
    // para ver  todos los productos productos
    async verTodosProductosModelo(){
        // código
        const url = 'https://appproduct.free.beeceptor.com/api/productos'
        return await fetch  (url)
          .then(response => response.json())
          .catch(error => console.error('Error:', error));
    }
    ,

    // para comprar producto
    async comprarProductoModelo(productoID) {
        const url = `https://appproduct.free.beeceptor.com/api/productos/${productoID}`;
        const peticion = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        });
        // Simulación de respuesta
        return {
            msg: `Compra del producto con ID: ${productoID} realizada con éxito.`,
        };
    }


    
}
    
export default productor
