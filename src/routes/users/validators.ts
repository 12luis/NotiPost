import { commonBase } from "../../routes/base.validators"
import { Joi } from "../../core/joi"
import { pagination } from "../../routes/base.validators";

export const baseModel = Joi.object({
    ...commonBase,
    name: Joi.string().required(),
    email: Joi.Email().required(),
    password: Joi.string().required()
}).options({ allowUnknown: true });

export const getAllModel = Joi.object({
    data: Joi.array().items(baseModel),
    pagination
}).required();

export const newModel = Joi.object({
    active: Joi.boolean().optional(),
    name: Joi.string().required(),
    email: Joi.Email().required(),
    password: Joi.string().required()
}).required();

export const editUserModel = Joi.object({
    name: Joi.string().optional(),
    active: Joi.boolean().optional()
}).required();