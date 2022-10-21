import auth from 'hapi-auth-jwt2';
import Boom from '@hapi/boom';
import { HapiServer } from 'server';

const validate = async(decoded, req, h) => {
    try {
        // Validate
        return { isValid: true };
    } catch (error) {
        return h.response('INVALID').code(400);
    }
}

export const authStrategies = async(server) => {
    try {
        await server.register(auth);
        server.auth.strategy('jwt', 'jwt', {
            key: '1op324klasjdsRoi349Cdsghkuo',
            validate,
            verifyOptions: { algorithms: ['HS256'] },
            errorFunc: (context) => context
        });
        server.auth.default('jwt')
    } catch (error) {
        return Boom.badRequest('Unknown');
    }
}