import{v4 as uuidv4} from 'uuid'
import bcrypt from "bcrypt"
import { createToken } from "../middlewares/auth.js"
import usuarios from "../models/usuarios.js"
import nodemailer from 'nodemailer'


const registroUsuarioController = async (req, res) => {
    const { id, password, email,...otherDataUser } = req.body
    // Encriptar el password
    const hashedPassword = await bcrypt.hash(password, 10)
    // Creación del objeto - spread
    const newUserData = {
      id: uuidv4(),
      password: hashedPassword,
      email,
     ...otherDataUser // spread req.body, se trata de recoger todas las propiedades, sin necesidad de ponerlos individualmente
     
    }  
    const user = await usuarios.registroUsuarioModelo(newUserData)
    try {  
      // Enviando email al usuario utilizando nodemailer
      const transporter = nodemailer.createTransport({
        host: process.env.HOST_MAILTRAP,
        port: process.env.PORT_MAILTRAP,
        secure: true,
        auth: {
          user: process.env.USER_MAILTRAP,
          pass: process.env.PASS_MAILTRAP
        },
        tls: {
            rejectUnauthorized: false
        },
      })
  
      const mailOptions = {
        from: process.env.USER_MAILTRAP,
        to: email,
        subject: 'Bienvenido a nuestra aplicación',
        text: 'Gracias por registrarte en nuestra aplicación.'
      }
  
      await transporter.sendMail(mailOptions)
  
      res.status(201).json({ msg: 'Usuario registrado con éxito' })
  
    }catch (error) {
      console.error(error)
      res.status(500).json({ msg: 'Error al registrar usuario' })
    }
} 

const loginUsuarioController =async (req,res) =>{

  const {username,password} = req.body
  try{
    const user = await usuarios.loginUsuarioModelo(username,password)
    const token = createToken(user)
    res.status(200).json({user,token})
  }catch(error){
    res.status(500).json({msg:error})
  }
}


const verUsuarioController = async (req,res) =>{
    const {id}= req.params
    try {
        const user = await usuarios.verUsuarioModelo(id)
        const status = user.error ? 404 : 200
        res.status(status).json(user)
    }catch(error){
        res.status(500).json({msg:error})

    }
}

const borrarUsuarioController = async (req,res) =>{
    const {id}= req.params
    // console.log(id);
    try {
    
        const user =  await usuarios.eliminarUsuarioModelo(id)
        const status = user.error ? 404 : 200
        res.status(status).json(user)
    
    }catch(error){
        res.status(500).json({msg:error})
    
    }
}


export{
    registroUsuarioController,
    loginUsuarioController,
    borrarUsuarioController,
    verUsuarioController
}