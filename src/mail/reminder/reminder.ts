const nodemailer = require('nodemailer');
import User from '../../routes/users/model';
import configs from '../../config';

export async function sendMail(user:any, post:any):Promise<boolean>{
    const targetEmail = user.email;
    try {
        console.log(`sending mail to ${targetEmail}`);
        if(!configs('mailsActive')){
            return true;
        }
        
        const user = await User.findOne({ email: targetEmail });
        if(!user){
            return false;
        }

        const output = htmlOutput(user, post);

        const transporter:any = nodemailer.createTransport({
            service: configs('mailService'),
            host: configs('mailHost'),
            secureConnection: configs('mailSecureConnection'),
            secure: configs('mailSecure'),
            auth: {
                user: configs('mailUser'),
                pass: configs('mailPass')
            }
        });

        await transporter.sendMail({
            from: configs('mailUser'),
            to: [ targetEmail ],
            subject: `Código de recuperación. Consulta UDG.`,
            html: output
        });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const htmlOutput = (_user:any, post) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Recordatorio - ${post.title}</h1>
        <p>Hola, ${_user.name}</p>
        <p>Este correo electrónico fue programado en una de las publicaciones de un grupo donde estás suscrito.</p>
        <p>Asegurate de no perder una fecha importante.</p>
        <p>Descripción de la publicación:</p>
        <p>${post.description}</p>
        <br>
        
        <p>Si desea contactar al soporte, mande un correo electrónico a: </p>
    
        <a type="email" style="color: blue">
            correo@dominio.com.mx
        </a>
        <br>
        <br>
        <small>El equipo Nebulosa</small>
    </body>
    </html>
    `
}