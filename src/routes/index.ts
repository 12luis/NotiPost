export const Routes:any = [
    {
        method: 'GET',
        path: '/',
        options: {
            handler: function(req:any, h:any){
                return h.response({time:new Date()});
            },
            auth: false,
            description: 'Default route',
        }
    }
]