import { commonBase } from "../base.validators"
import { Joi } from "../../core/joi"
import { pagination } from "../base.validators";

export const baseModel = Joi.object({
    ...commonBase,
    ownerId: Joi.ObjectId().optional(),
    groupId: Joi.ObjectId().optional(),
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    media: Joi.string().optional(),
    createdAt: Joi.date().optional(),
    finishAt: Joi.date().optional(),
    notifyAt: Joi.date().optional(),
    moment: Joi.boolean().optional(),
    notified: Joi.boolean().optional()
}).options({ allowUnknown: true });

export const getAllModel = Joi.object({
    data: Joi.array().items(baseModel),
    pagination
}).required();

export const newModel = Joi.object({
    ownerId: Joi.ObjectId().optional(),
    groupId: Joi.ObjectId().optional(),
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    media: Joi.string().optional(),
    createdAt: Joi.date().optional(),
    finishAt: Joi.date().optional(),
    notifyAt: Joi.date().optional(),
    moment: Joi.boolean().optional(),
    notified: Joi.boolean().optional(),
    active: Joi.boolean().optional()
}).required();

export const editModelV = Joi.object({
    ownerId: Joi.ObjectId().optional(),
    groupId: Joi.ObjectId().optional(),
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    media: Joi.string().optional(),
    createdAt: Joi.date().optional(),
    finishAt: Joi.date().optional(),
    notifyAt: Joi.date().optional(),
    moment: Joi.boolean().optional(),
    notified: Joi.boolean().optional(),
    active: Joi.boolean().optional()
}).required();

export const deleteModelV = Joi.object({
    id: Joi.ObjectId().required(),
    groupId: Joi.ObjectId().required()
});