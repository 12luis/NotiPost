import Boom from '@hapi/boom';
import jwt from 'jsonwebtoken';
import User from '../users/model';

export async function _login(req:any, h:any):Promise<any>{
    try {
        const user:any = await User.findOne({
            email: req.payload.email
        })
        // TODO where user is active

        const signedJwt =  jwt.sign({ _id: user._id } )

        return h.response({token:signedJwt}).code(200);
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}