import { commonBase } from "../base.validators"
import { Joi } from "../../core/joi"
import { pagination } from "../base.validators";

export const baseModel = Joi.object({
    ...commonBase,
    name: Joi.string().optional(),
    cve: Joi.string().optional(),
    centerId: Joi.ObjectId().optional(),
}).options({ allowUnknown: true });

export const getAllModel = Joi.object({
    data: Joi.array().items(baseModel),
    pagination
}).required();

export const newModel = Joi.object({
    active: Joi.boolean().optional(),
    name: Joi.string().optional(),
    cve: Joi.string().optional(),
    centerId: Joi.ObjectId().optional(),
}).required();

export const editModelV = Joi.object({
    active: Joi.boolean().optional(),
    name: Joi.string().optional(),
    cve: Joi.string().optional(),
    centerId: Joi.ObjectId().optional(),
}).required();