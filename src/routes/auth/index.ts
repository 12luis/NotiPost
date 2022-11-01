import Boom from '@hapi/boom';
import jwt from 'jsonwebtoken';
import User from '../users/model';

export async function _login(request:any, h:any):Promise<any>{
    try {
        const { email, password } = request.payload as any;
        const _user: any = await User.findOne({ email: { $regex: `^${email}$`, $options:'i' }, deleted: { $ne: true } }).select('+password');
        if(!_user){
            return Boom.unauthorized('Credenciales invalidas');
        }
        if(!_user.active){
            return Boom.unauthorized('Inactive user');
        }
        if(!_user.emailVerified){
            return Boom.unauthorized('Usuario no verificado');
        }
        if(password !== _user.password){
            return Boom.unauthorized('Invalid password');
        }

        const token =  jwt.sign({ _id: _user._id });
        return h.response({ token }).code(200);
        
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}