import { Joi } from "../../core/joi";

export const signIn = Joi.object({
    email: Joi.Email().required(),
    password: Joi.string().required()
}).required();

export const signInResponse = Joi.object({
    token: Joi.string().required()
}).required();

export const recoverPassword = Joi.object({
    email: Joi.Email().required()
}).required();

export const recoverPasswordResponse = Joi.object({
    success: Joi.boolean().required(),
    message: Joi.string().optional()
}).required();

export const resetModel = Joi.object({
    token: Joi.string().required(),
    password: Joi.string().required()
}).required();