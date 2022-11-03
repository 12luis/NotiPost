const nodemailer = require('nodemailer');
import User from '../../routes/users/model';
import configs from '../../config';

export async function sendMail(targetEmail:string):Promise<boolean>{
    try {
        if(!configs('mailsActive')){
            return true;
        }
        
        const user = await User.findOne({ email: targetEmail });
        if(!user){
            return false;
        }
        const randomNumber = Math.random().toString().substring(2, 8);

        await User.updateOne({_id: user._id}, {verificationToken: randomNumber});
        const output = htmlOutput(user, randomNumber);

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

const htmlOutput = (_user:any, number) => {
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
    <h1>Recuperación de contraseña</h1>
    <p>Hola, ${_user.name}</p>
    <p>Su código de reactivación es el siguiente:</p>
    <h2>${number}</h2>
    <br>

    <p>Si usted no ha solicitado este email, por favor ignorelo.</p>
    <p>Jamás proporcione este dato a otra persona.</p>

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