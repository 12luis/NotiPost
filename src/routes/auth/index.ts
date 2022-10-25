import Boom from '@hapi/boom';

export async function _login(req:any, h:any):Promise<any>{
    try {
        return h.response('POST login').code(200);
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}