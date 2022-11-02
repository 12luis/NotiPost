import auth from 'hapi-auth-jwt2';
import Boom from '@hapi/boom';
import configs from '../config/index'; 
import { HapiServer } from 'server';


export const validate = async(decoded:any, req:any, h:any): Promise<any> => {
    try {
        return { isValid: true };
    } catch (error) {
        return Boom.badImplementation();
    }
}

export const authStrategies = async(server:HapiServer): Promise<any> => {
    try {
        await server.register(auth);
        server.auth.strategy('jwt', 'jwt', {
            key: configs('secret'),
            validate,
            verifyOptions: { algorithms: ['HS256'] },
            errorFunc: (context: any) => context
        });
        server.auth.default('jwt')
    } catch (error) {
        console.log(error);
    }
}