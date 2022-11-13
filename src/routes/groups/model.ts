import * as Mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const modelName = 'Group'

const schema = new Schema({
    _id: { 
        type: Mongoose.Schema.Types.ObjectId, 
        auto:true 
    },
    name: {
        type: String, required: true
    },
    hasPassword: {
        type: Boolean, required: true, default: false
    },
    password: {
        type: String, required: false // TODO allow null, '', undefined.
    },
    owner: {
        type: Mongoose.Schema.Types.ObjectId,
        required: true
    },
    subject: {
        type: Boolean,
        required: true
    },
    degree: { // TODO rename degrees to coordination
        type: Boolean,
        required: true
    },
    referenceId: {
        type: Mongoose.Schema.Types.ObjectId,
        required: true
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