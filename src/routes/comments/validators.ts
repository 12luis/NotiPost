import { commonBase } from "../base.validators"
import { Joi } from "../../core/joi"
import { pagination } from "../base.validators";

export const baseModel = Joi.object({
    ...commonBase,
    ownerId: Joi.ObjectId().optional(),
    postId: Joi.ObjectId().optional(),
    comment: Joi.string().optional(),
    createdAt: Joi.date().optional()
}).options({ allowUnknown: true });

export const getAllModel = Joi.object({
    data: Joi.array().items(baseModel),
    pagination
}).required();

export const newModel = Joi.object({
    ownerId: Joi.ObjectId().optional(),
    postId: Joi.ObjectId().optional(),
    comment: Joi.string().optional(),
    active: Joi.boolean().optional(),
    createdAt: Joi.date().optional()
}).required();

export const editModelV = Joi.object({
    ownerId: Joi.ObjectId().optional(),
    postId: Joi.ObjectId().optional(),
    comment: Joi.string().optional(),
    active: Joi.boolean().optional(),
    createdAt: Joi.date().optional()
}).required();