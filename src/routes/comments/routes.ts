import { _create, _getAll } from ".";
import { newResponse } from "../base.validators";
import { failAction } from "../../core/joi";
import { baseModel, newModel } from "./validators";

const prefix:string = '/posts';
const postfix:string = 'comments'; 


export default [
    {
        method: 'GET',
        path: `${prefix}/{postId}/${postfix}`,
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
        path: `${prefix}/{postId}/${postfix}`,
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
    }
]