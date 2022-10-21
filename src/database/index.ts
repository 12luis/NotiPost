import mongoose from 'mongoose';

export const database = async(server) => {
    try {
        const mongoCloud = false;
        const connUrl = (mongoCloud) ? 'unknown' : 'mongodb://localhost/sisfp';
        await mongoose.connect(connUrl);
        console.log('Database is connected');
    } catch (error) {
        console.log(error);
    }
}