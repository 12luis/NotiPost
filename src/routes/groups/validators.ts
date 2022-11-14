import { commonBase } from "../../routes/base.validators"
import { Joi } from "../../core/joi"
import { pagination } from "../../routes/base.validators";

export const baseModel = Joi.object({
    ...commonBase,
    name: Joi.string().optional(),
    hasPassword: Joi.boolean().optional(),
    password: Joi.string().allow('', null).optional(),
    ownerId: Joi.ObjectId().optional(),
    subject: Joi.boolean().optional(),
    degree: Joi.boolean().optional(),
    referenceId: Joi.ObjectId().optional(),
    active: Joi.boolean().optional()
}).options({ allowUnknown: true });

export const getAllModel = Joi.object({
    data: Joi.array().items(baseModel),
    pagination
}).required();

export const newModel = Joi.object({
    name: Joi.string().optional(),
    hasPassword: Joi.boolean().optional(),
    password: Joi.string().allow('', null).optional(),
    ownerId: Joi.ObjectId().optional(),
    subject: Joi.boolean().optional(),
    degree: Joi.boolean().optional(),
    referenceId: Joi.ObjectId().optional(),
    active: Joi.boolean().optional()
}).required();

export const editModelV = Joi.object({
    name: Joi.string().optional(),
    hasPassword: Joi.boolean().optional(),
    password: Joi.string().allow('', null).optional(),
    ownerId: Joi.ObjectId().optional(),
    subject: Joi.boolean().optional(),
    degree: Joi.boolean().optional(),
    referenceId: Joi.ObjectId().optional(),
    active: Joi.boolean().optional()
}).required();