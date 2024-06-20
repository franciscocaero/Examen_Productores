import jwt from 'jsonwebtoken'

const createToken = (userInfo) =>{
    //                  1          2            3 
    return jwt.sign(userInfo,'secret_key',{expiresIn:'1h'})

}


const verifyToken = (req,res,next)=>{
    // recibo el token
    const authHeader = req.headers.authorization
    // validando el token 
    if (!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({message:"Token no proporcionado, intente iniciar sesión"})
    }
    // dividir el token "Bearer:  "

    // token = ['Bearer', 'ssdkfjsdsfjk']
    const token = authHeader.split(' ')[1]  
    // verificar el token 
    jwt.verify(token,'secret_key', (err,decoded) =>{
        // verificacion 
        if (err){
            return res.status(403).json({message:"Fallo al autentificar el token"})
        }
        req.user =decoded
        next()
    })

}

const verifyAdminToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: "Token no proporcionado, intente iniciar sesión" });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'secret_key', (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Fallo al autentificar el token" });
      }
      if (decoded.id !== 'cc1fabd6-ceeb-4f6c-8b76-f21288f0a7c5') {
        return res.status(403).json({ message: "No tienes permisos de administrador" });
      }
      req.user = decoded;
      next();
    })
}



export {
    createToken,
    verifyToken,
    verifyAdminToken
}