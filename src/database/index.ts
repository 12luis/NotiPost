import mongoose from 'mongoose';

export const database = async(server) => {
    try {
        const mongoCloud = false;
        const connUrl = (mongoCloud) ? 'mongodb+srv://admin:admin@sisfp.w4kxy5y.mongodb.net/test' : 'mongodb://localhost/sisfp';
        await mongoose.connect(connUrl);
        console.log('Database is connected');
    } catch (error) {
        console.log(error);
    }
}