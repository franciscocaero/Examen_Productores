import nodemailer from "nodemailer"
import dotenv from 'dotenv'
dotenv.config()


let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.HOST_MAILTRAP,
    port: process.env.PORT_MAILTRAP,
    auth: {
        user: process.env.USER_MAILTRAP,
        pass: process.env.PASS_MAILTRAP,
    }
});
// metodo para enviar correos electronicos 
const sendMailToUser = () => {

    let mailOptions = {
        from: process.env.USER_MAILTRAP,
        to: "saulnike111@gmail.com",
        subject: "Verifica tu cuenta",
        html: `<p>Hola, gracias por tu compra, esperamos seguir contando con tu ayuda :D </p>`
    };
    

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Correo enviado: ' + info.response);
        }
    });
};
// exportar el método
export default sendMailToUser