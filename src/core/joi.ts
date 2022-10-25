import joi from 'joi';
import * as Boom from '@hapi/boom';

const ObjectIdPattern = /^[0-9a-fA-F]{24}$/;
const EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Joi = joi.extend(
    {
        type: 'ObjectId',
        messages : {invalid : 'No hay registros con esa referencia.'},
        validate(value, { error }) {
            if(!ObjectIdPattern.test(String(value)))
                return { value, errors: error('invalid')}
        }
    },
    {
        type: 'Email',
        messages: { invalid: 'El campo debe ser un correo electrónico valido.'},
        validate(value, {error}){
            if(!EmailPattern.test(String(value)))
                return { value, errors: error('invalid')}
        }
    },
);

export const failAction = ((req:any, h:any, error:any) => {
    console.log(error);
    return error.isJoi 
        ? Boom.badRequest(error.details[0].message)
        : Boom.badImplementation();
})