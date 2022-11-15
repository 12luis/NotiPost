import * as Mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const modelName = 'Comment'

const schema = new Schema({
    _id: { 
        type: Mongoose.Schema.Types.ObjectId, 
        auto:true 
    },
    ownerId: {
        type: Mongoose.Schema.Types.ObjectId, 
        required: true
    },
    postId: {
        type: Mongoose.Schema.Types.ObjectId, 
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: false
    },
    active: { 
        type: Boolean, 
        required: true, 
        default: true 
    },
    deleted: { 
        type: Boolean, 
        required: true, 
        default: false 
    },
    root: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    versionKey: false,
    collection: modelName
});

export default model(modelName, schema);