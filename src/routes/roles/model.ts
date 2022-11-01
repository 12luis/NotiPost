import * as Mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const modelName = 'Role'

const schema = new Schema({
    _id: { 
        type: Mongoose.Schema.Types.ObjectId, 
        auto:true 
    },
    active: { 
        type: Boolean, 
        required: true, 
        default: false 
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
    },


    // model
    name: { type: String, required: true },
    modules: { type: [{ type: String, required: true }]}
}, {
    versionKey: false,
    collection: modelName
});

export default model(modelName, schema);