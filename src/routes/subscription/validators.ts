import { commonBase } from "../base.validators"
import { Joi } from "../../core/joi"
import { pagination } from "../base.validators";

export const baseModel = Joi.object({
    ...commonBase,
    userId: Joi.ObjectId().optional(),
    groupId: Joi.ObjectId().optional()
}).options({ allowUnknown: true });

export const getAllModel = Joi.object({
    data: Joi.array().items(baseModel),
    pagination
}).required();

export const newModel = Joi.object({
    userId: Joi.ObjectId().optional(),
    groupId: Joi.ObjectId().optional(),
    active: Joi.boolean().optional()
}).required();

export const editModelV = Joi.object({
    userId: Joi.ObjectId().optional(),
    groupId: Joi.ObjectId().optional(),
    active: Joi.boolean().optional()
}).required();

export const unsubModel = Joi.object({
    userId: Joi.ObjectId().optional(),
    groupId: Joi.ObjectId().optional(),
});