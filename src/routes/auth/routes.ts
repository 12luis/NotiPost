import { _login } from ".";
import { signIn, signInResponse } from './validators'
import { failAction } from '../../core/joi'

const prefix:string = '/auth';

export default [
    {
        method: 'POST',
        path: `${prefix}/login`,
        options: {
            handler: _login,
            auth: false,
            description: 'Iniciar sesión, retorna token',
            validate: {
                payload: signIn,
                failAction
            },
            response: {
                schema: signInResponse,
                failAction
            }
        }
    }
]