import { _create, _delete, _edit, _findById, _getAll } from ".";

const prefix:string = '/users';

export default [
    {
        method: 'GET',
        path: `${prefix}/{id}`,
        options: {
            handler: _findById,
            auth: 'jwt',
            description: 'Find resource by ID'
        }
    },
    {
        method: 'GET',
        path: `${prefix}`,
        options: {
            handler: _getAll,
            auth: 'jwt',
            description: 'Find list of resources'
        }
    },
    {
        method: 'POST',
        path: `${prefix}`,
        options: {
            handler: _create,
            auth: 'jwt',
            description: 'Create resource'
        }
    },
    {
        method: 'PUT',
        path: `${prefix}/{id}`,
        options: {
            handler: _edit,
            auth: 'jwt',
            description: 'Edit resource'
        }
    },
    {
        method: 'DELETE',
        path: `${prefix}/{id}`,
        options: {
            handler: _delete,
            auth: 'jwt',
            description: 'Delete resource'
        }
    }
]