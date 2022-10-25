import { _login } from ".";

const prefix:string = '/auth';

export default [
    {
        method: 'POST',
        path: `${prefix}/login`,
        options: {
            handler: _login,
            auth: false,
            description: 'Iniciar sesión, retorna token'
        }
    }
]