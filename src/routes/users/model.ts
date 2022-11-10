import * as Mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const modelName = 'User'

const schema = new Schema({
    _id: { 
        type: Mongoose.Schema.Types.ObjectId, 
        auto:true 
    },
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true
    },
    password: { 
        type: String, 
        required: true 
    },
    roleId: { 
        type: Mongoose.Schema.Types.ObjectId, 
        required: false 
    },
    centerId: { 
        type: Mongoose.Schema.Types.ObjectId, 
        required: true 
    },
    degreeId: { 
        type: Mongoose.Schema.Types.ObjectId, 
        required: false 
    },
    emailVerified: { 
        type: Boolean, 
        required: false,
        default: false
    },
    verificationToken: { 
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