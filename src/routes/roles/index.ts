import Boom from '@hapi/boom';

export async function _findById(req:any, h:any):Promise<any>{
    try {
        return h.response('GET findById').code(200);
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}

export async function _getAll(req:any, h:any):Promise<any>{
    try {
        return h.response('GET getAll').code(200);
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}

export async function _create(req:any, h:any):Promise<any>{
    try {
        return h.response('POST create').code(200);
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}

export async function _edit(req:any, h:any):Promise<any>{
    try {
        return h.response('PUT edit').code(200);
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}

export async function _delete(req:any, h:any):Promise<any>{
    try {
        return h.response('DELETE edit').code(200);
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}