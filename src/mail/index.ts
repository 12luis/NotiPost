import nodemailer from 'nodemailer';

const sendMail = async() => {
    try {
        // const output = htmlOutput();

        const transporter = nodemailer.createTransport({
            // service: //TODO configs;
            // host: 
        });
    } catch (error) {
        console.log(error);
    }
}

// const htmlOutput() => {
//     return ``;
// }