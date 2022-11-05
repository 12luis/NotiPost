import authRoutes from './auth/routes';
import usersRoutes from './users/routes';
import rolesRoutes from './roles/routes';
import centersRoutes from './centers/routes';

export const Routes:any = [
    {
        method: 'GET',
        path: '/',
        options: {
            handler: function(req:any, h:any){ return h.response({time:new Date()})},
            auth: false,
        }
    },
    ...authRoutes,
    ...usersRoutes,
    ...rolesRoutes,
    ...centersRoutes
]