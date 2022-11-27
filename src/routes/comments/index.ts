import Boom from '@hapi/boom';
import mongoose from 'mongoose';
import * as _ from 'lodash';
import Model from './model';


export async function _getAll(request:any, h:any):Promise<any>{
    const { query } = request;
    query.paginationPage = query.paginationPage || 1;
    query.paginationPerPage = query.paginationPerPage || 100000;
    try {
        const aggregate: any = [];
        const $and: any = [];
        if(query.search){
            const term = `(?=.*${query.search}.*)`;
            const $or: any = [];
            $or.push({ name: { $regex: term, $options: 'i' }});
            $or.push({ description: { $regex: term, $options: 'i' }});
            $and.push({ $or });
        }else if(query.id && query.id.length){
            const ids = query.id.split(',');
            if(ids.length === 1){
                $and.push({ _id: new mongoose.Types.ObjectId(ids[0])});
            }else if (ids.length > 1){
                const $or: any = [];
                ids.forEach(id => {
                    $or.push({ _id: new mongoose.Types.ObjectId(id)});
                });
                $and.push({  $or });
            }
        }
        $and.push({ postId: new mongoose.Types.ObjectId(request.params.postId)});
        $and.push({ deleted: { $ne: true } });
        if($and.length){
            aggregate.push({
                $match: { $and },
            });
        }
        const _aggregate = _.clone(aggregate);
        let $sort: any = {};
        if(query.sort){
            $sort[query.sort] = query.sortDir === 'desc' ? -1 : 1;
        } else {
            $sort = { createdAt: -1 };
        }
        aggregate.push({
            $sort
        });
        aggregate.push({
            $skip: Number(
                (query.paginationPage * 1 - 1) * (query.paginationPerPage * 1),
            ),
        });
        aggregate.push({
            $limit: Number(query.paginationPerPage),
        });
        _aggregate.push({ $count: 'total' });
        const total = await Model.countDocuments({ deleted: false });
        const totalFiltered: any = await Model.aggregate(_aggregate);
        const result: any = await Model.aggregate(aggregate);
        const data = {
            data: result,
            pagination: {
                count: total,
                countFiltered: totalFiltered.length ? totalFiltered[0].total : 0,
                page: query.paginationPage * 1,
                perPage: query.paginationPerPage * 1,
            },
        };

        return h.response(data).code(200).header('Content-Type', 'application/json');
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}

export async function _create(request:any, h:any):Promise<any>{
    const { payload } = request;
    let id;
    try {
        const model = new Model(payload);
        await model.save();
        id = model._id;
        return h.response({ _id: id.toString() }).code(201);
    } catch (error) {
        console.log(error);
        await Model.deleteOne({ _id: id });
        return Boom.badImplementation();
    }
}
