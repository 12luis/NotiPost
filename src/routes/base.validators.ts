import { Joi } from '../core/joi';

export const newResponse = Joi.object({
    _id: Joi.ObjectId().required()
});

export const findModel = Joi.object({
    id: Joi.ObjectId().required()
});

export const deleteModel = Joi.object({
    id: Joi.ObjectId().required()
});

export const editModel = Joi.object({
    id: Joi.ObjectId().required()
});

export const editResponse = Joi.object({
    _id: Joi.ObjectId().required()
});

export const deleteResponse = Joi.object({
    success: Joi.boolean().required()
});

export const commonBase = {
    _id: Joi.ObjectId().required(),
    active: Joi.boolean().required(),
    deleted: Joi.boolean().required(),
    root: Joi.boolean().required()
};

export const pagination = Joi.object({
    count: Joi.number().required().min(0),
    countFiltered: Joi.number().required().min(0),
    page: Joi.number().required().min(1),
    perPage: Joi.number().required().min(1)
});