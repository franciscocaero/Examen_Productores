import bcrypt from "bcrypt"

const usuarios = {
    async registroUsuarioModelo(newUserData){

        const url = 'https://appusuarios.free.beeceptor.com/api/usuarios'
        const peticion = await fetch(url,{
            method: 'POST', // verbo que quiero ejecutar 
            body: JSON.stringify(newUserData), // informacion
            headers: {'Content-Type':'application/json'} // tipo de contenido
        })
        const data = await peticion.json()

        return data

    }
    ,
    async loginUsuarioModelo(userName,password){

        const url = 'https://appusuarios.free.beeceptor.com/api/usuarios'
        const peticion = await fetch(url)
        const users = await peticion.json()
        const user = users.find(user => user.username===userName)
        if (!user){
            return{error:"Username o contraseña incorrecto"}
            }
            const passwordMatch = await bcrypt.compare(password,user.password)
            if (user && passwordMatch){
                return user
            }else{
                return{error:"Username o contraseña incorrecto"}
        }

    }
    ,
    // para ver usuario especifico 
    async verUsuarioModelo(usuarioID){
        console.log(usuarioID)
        const response = await fetch(`https://appusuarios.free.beeceptor.com/api/usuarios/${usuarioID}`)
        if (!response.ok){
            return {error:"Usuario no encontrado"}
        }   

        const data = await response.json()

        return data
    }
    ,
    // para eliminar producto
    async eliminarUsuarioModelo(usuarioID){
        // código
        const url = `https://appusuarios.free.beeceptor.com/api/usuarios/${usuarioID}`;
        const peticion = await fetch(url, {
            method: 'DELETE', // verbo para eliminar
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await peticion.json();
        return {msg:"Usuario eliminado correctamente"}
    }
    
    

}

export default usuarios