import * as Mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const modelName = 'Subscription';

const schema = new Schema({
    _id: { 
        type: Mongoose.Schema.Types.ObjectId, 
        auto:true 
    },
    userId: {
        type: Mongoose.Schema.Types.ObjectId,
        required: true
    },
    groupId: {
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