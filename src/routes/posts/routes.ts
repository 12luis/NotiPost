import { _create, _delete, _edit, _findById, _getAll } from ".";
import { deleteModel, deleteResponse, editModel, editResponse, findModel, newResponse } from "../base.validators";
import { failAction } from "../../core/joi";
import { baseModel, deleteModelV, editModelV, newModel } from "./validators";

const prefix:string = '/groups';
const postfix:string = 'posts';

export default [
    {
        method: 'GET',
        path: `${prefix}/{groupId}/${postfix}/{id}`,
        options: {
            handler: _findById,
            auth: 'jwt',
            description: 'Find resource by ID',
            // validate: {
            //     // headers: 
            //     params: findModel,
            //     failAction
            // },
            response: {
                schema: baseModel,
                failAction
            }
        }
    },
    {
        method: 'GET',
        path: `${prefix}/{groupId}/${postfix}`,
        options: {
            handler: _getAll,
            auth: 'jwt',
            description: 'Find list of resources',
            // validate: {
            //     // headers: 
            //     params: findModel,
            //     failAction
            // },
            response: {
                schema: baseModel,
                failAction
            }
        }
    },
    {
        method: 'POST',
        path: `${prefix}/{groupId}/${postfix}`,
        options: {
            handler: _create,
            auth: 'jwt',
            description: 'Create resource',
            validate: {
                // headers: 
                payload: newModel,
                failAction
            },
            response: {
                schema: newResponse,
                failAction
            }
        }
    },
    {
        method: 'DELETE',
        path: `${prefix}/{groupId}/${postfix}/{id}`,
        options: {
            handler: _delete,
            auth: 'jwt',
            description: 'Delete resource',
            validate: {
                // headers: 
                params: deleteModelV,
                failAction
            },
            response: {
                schema: deleteResponse,
                failAction
            }
        }
    }
]